from flask import Blueprint, jsonify, request
from app.models import Solicitudes, Usuarios, db, Entregas
from datetime import datetime
from flask_jwt_extended import jwt_required, get_jwt_identity

cliente_bp = Blueprint('cliente', __name__)

@cliente_bp.route('/api/cliente/crear-solicitud', methods=['POST'])
def crear_solicitud():
    data = request.json
    idSolicitante = data['idSolicitante']
    
    solicitante = Usuarios.query.get(idSolicitante)
    if solicitante is None:
        return jsonify({"error": "Solicitante no encontrado"}), 404
    
    cliente = f"{solicitante.nombre} {solicitante.apellido}"

    nueva_solicitud = Solicitudes(
        cliente=cliente,
        fecha_entrega=datetime.strptime(data['fecha_entrega'], '%Y-%m-%d').date(),
        lugar=data['lugar'],
        nombre_recibe=data['nombre_recibe'],
        telefono_recibe=data['telefono_recibe'],
        cantidad_tanques=data['cantidad_tanques'],
        cantidad_galones=data['cantidad_galones'],
        cantidad_cuartos=data['cantidad_cuartos'],
        cantidad_otros=data['cantidad_otros'],
        fecha_solicitud=datetime.now().date(),
        cliente_credito=data['cliente_credito'],
        origen_producto=data['origen_producto'],
        preparacion=data['preparacion'],
        idRTV=idSolicitante,
        idSolicitante=idSolicitante,
        Estado=data['Estado']
    )
    
    db.session.add(nueva_solicitud)
    db.session.commit()
    
    return jsonify({"mensaje": "Solicitud creada exitosamente"})

@cliente_bp.route('/api/cliente/mis-solicitudes', methods=['GET'])
@jwt_required()
def mis_solicitudes():
    id_cliente = get_jwt_identity()

    solicitudes = Solicitudes.query.filter_by(idSolicitante=id_cliente).all()

    solicitudes_data = []
    for solicitud in solicitudes:
        entrega = Entregas.query.filter_by(idSolicitud=solicitud.idSolicitud).first()

        repartidor_nombre = None
        if entrega and entrega.idChofer:
            repartidor = Usuarios.query.get(entrega.idChofer)
            repartidor_nombre = repartidor.nombre if repartidor else None
        
        solicitud_data = {
            "idSolicitud": solicitud.idSolicitud,
            "cliente": solicitud.cliente,
            "nombre_repartidor": repartidor_nombre,
            "estado_entrega": entrega.estado if entrega else None,
            "id_cliente": id_cliente,
            "id_repartidor": entrega.idChofer if entrega else None
        }
        solicitudes_data.append(solicitud_data)
    
    return jsonify({"solicitudes": solicitudes_data})
