from flask import jsonify, request, Blueprint
from app.models import Solicitudes, Usuarios, db
import datetime



solicitudes_bp = Blueprint('solicitudes', __name__)

@solicitudes_bp.route('/api/solicitudes', methods=['POST'])
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
    # Código para crear una solicitud
pass

# Otras rutas y funciones relacionadas con solicitudes
