from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import SQLAlchemyError
from flask_cors import CORS
from flask import Flask, request, jsonify, make_response
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, unset_jwt_cookies
import datetime


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secreto'
CORS(app, supports_credentials=True)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:0401@localhost:3306/OrderManagement'
db = SQLAlchemy(app)
jwt = JWTManager(app)


class Usuarios(db.Model):
    idUsuario = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50))
    correo = db.Column(db.String(100))
    password = db.Column(db.String(100))
    telefono = db.Column(db.String(20))
    tipo = db.Column(db.String(20))
    tienda = db.Column(db.String(50))
    fecha_registro = db.Column(db.Date)


class Entregas(db.Model):
    idEntrega = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idSolicitud = db.Column(db.Integer, db.ForeignKey('solicitudes.idEntrega'))
    estado = db.Column(db.String(50))
    idChofer = db.Column(db.Integer, db.ForeignKey('usuarios.idUsuario'))


class Solicitudes(db.Model):
    idEntrega = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cliente = db.Column(db.String(100))
    fecha_entrega = db.Column(db.Date)
    lugar = db.Column(db.String(100))
    nombre_recibe = db.Column(db.String(100))
    telefono_recibe = db.Column(db.String(20))
    cantidad_tanques = db.Column(db.Integer)
    cantidad_galones = db.Column(db.Integer)
    cantidad_cuartos = db.Column(db.Integer)
    cantidad_otros = db.Column(db.Integer)
    fecha_solicitud = db.Column(db.Date)
    cliente_credito = db.Column(db.Boolean)
    origen_producto = db.Column(db.String(50))
    preparacion = db.Column(db.Boolean)
    idRTV = db.Column(db.Integer, db.ForeignKey('usuarios.idUsuario'))
    idSolicitante = db.Column(db.Integer, db.ForeignKey('usuarios.idUsuario'))
    Estado = db.Column(db.String(50))

# Función para autenticar el usuario


def authenticate(username, password):
    user = Usuarios.query.filter_by(correo=username).first()
    if user and user.password == password:
        return user

# Función para generar el token JWT


def identity(payload):
    user_id = payload['identity']
    return Usuarios.query.get(user_id)


@app.route('/api/usuarios', methods=['POST'])
def crear_usuario():
    nombre = request.json['nombre']
    apellido = request.json['apellido']
    correo = request.json['correo']
    telefono = request.json['telefono']
    tipo = request.json['tipo']
    tienda = request.json['tienda']
    fecha_registro = datetime.now().date()

    nuevo_usuario = Usuarios(nombre=nombre, apellido=apellido, correo=correo,
                             telefono=telefono, tipo=tipo, tienda=tienda, fecha_registro=fecha_registro)

    db.session.add(nuevo_usuario)
    db.session.commit()

    return jsonify({"mensaje": "Usuario creado exitosamente"})


@app.route('/api/solicitudes', methods=['POST'])
def crear_solicitud():
    idSolicitante = request.json['idSolicitante']

    solicitante = Usuarios.query.get(idSolicitante)
    if solicitante is None:
        return jsonify({"error": "Solicitante no encontrado"}), 404

    cliente = request.json['cliente']
    fecha_entrega = datetime.strptime(
        request.json['fecha_entrega'], '%Y-%m-%d').date()
    lugar = request.json['lugar']
    nombre_recibe = request.json['nombre_recibe']
    telefono_recibe = request.json['telefono_recibe']
    cantidad_tanques = request.json['cantidad_tanques']
    cantidad_galones = request.json['cantidad_galones']
    cantidad_cuartos = request.json['cantidad_cuartos']
    cantidad_otros = request.json['cantidad_otros']
    fecha_solicitud = datetime.now().date()
    cliente_credito = request.json['cliente_credito']
    origen_producto = request.json['origen_producto']
    preparacion = request.json['preparacion']
    idRTV = request.json['idRTV']
    idSolicitante = request.json['idSolicitante']
    Estado = request.json['Estado']

    nueva_solicitud = Solicitudes(
        cliente=cliente,
        fecha_entrega=fecha_entrega,
        lugar=lugar,
        nombre_recibe=nombre_recibe,
        telefono_recibe=telefono_recibe,
        cantidad_tanques=cantidad_tanques,
        cantidad_galones=cantidad_galones,
        cantidad_cuartos=cantidad_cuartos,
        cantidad_otros=cantidad_otros,
        fecha_solicitud=fecha_solicitud,
        cliente_credito=cliente_credito,
        origen_producto=origen_producto,
        preparacion=preparacion,
        idRTV=idRTV,
        idSolicitante=idSolicitante,
        Estado=Estado
    )

    db.session.add(nueva_solicitud)
    db.session.commit()

    return jsonify({"mensaje": "Solicitud creada exitosamente"})


@app.route('/api/entregas', methods=['POST'])
def crear_entrega():
    idSolicitud = request.json['idSolicitud']
    estado = request.json['estado']
    idChofer = request.json['idChofer']

    solicitud = Solicitudes.query.get(idSolicitud)
    if solicitud is None:
        return jsonify({"error": "Solicitud no encontrada"}), 404

    chofer = Usuarios.query.get(idChofer)
    if chofer is None or chofer.tipo != "delivery":
        return jsonify({"error": "Chofer no encontrado o no es de tipo 'delivery'"}), 404

    nueva_entrega = Entregas(idSolicitud=idSolicitud,
                             estado=estado, idChofer=idChofer)

    db.session.add(nueva_entrega)
    db.session.commit()

    return jsonify({"mensaje": "Entrega creada exitosamente"})


@app.route('/api/entregas/<int:id>', methods=['PUT'])
def actualizar_estado_entrega(id):
    entrega = Entregas.query.get(id)

    if entrega is None:
        return jsonify({"error": "Entrega no encontrada"}), 404

    nuevo_estado = request.json['estado']
    entrega.estado = nuevo_estado

    db.session.commit()

    return jsonify({"mensaje": "Estado de entrega actualizado exitosamente"})


@app.route('/api/login', methods=['POST'])
def login():
    correo = request.json['correo']
    password = request.json['password']

    try:
        usuario = Usuarios.query.filter_by(correo=correo).first()

        if usuario and usuario.password == password:
            token = create_access_token(identity=usuario.idUsuario)
            return jsonify({"mensaje": "Inicio de sesión exitoso", "token": token})
        else:
            return jsonify({"error": "Credenciales inválidas"}), 401

    except SQLAlchemyError:
        db.session.rollback()
        return jsonify({"error": "Error en la base de datos"}), 500

if __name__ == '__main__':
    app.run()
