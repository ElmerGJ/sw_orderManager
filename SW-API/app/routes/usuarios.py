from flask import jsonify, request, Blueprint
from app.models import Usuarios, db
from datetime import datetime

usuarios_bp = Blueprint('usuarios', __name__)


@usuarios_bp.route('/api/usuarios', methods=['POST'])
def crear_usuario():
    nombre = request.json['nombre']
    apellido = request.json['apellido']
    correo = request.json['correo']
    password = request.json['password']
    telefono = request.json['telefono']
    tipo = request.json['tipo']
    tienda = request.json['tienda']
    fecha_registro = datetime.now().date()

    nuevo_usuario = Usuarios(nombre=nombre, apellido=apellido, correo=correo, password=password,
                             telefono=telefono, tipo=tipo, tienda=tienda, fecha_registro=fecha_registro)

    db.session.add(nuevo_usuario)
    db.session.commit()

    return jsonify({"mensaje": "Usuario creado exitosamente"})
    # Código para crear un usuario
pass

# Otras rutas y funciones relacionadas con usuarios
