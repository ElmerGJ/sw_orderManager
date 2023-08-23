from flask import Blueprint, jsonify, request
from app.models import Solicitudes, Usuarios, db
from datetime import datetime

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
def mis_solicitudes():
    # Aquí debes implementar la lógica para obtener y devolver las solicitudes del cliente
    return jsonify({"mensaje": "Mis solicitudes"})
