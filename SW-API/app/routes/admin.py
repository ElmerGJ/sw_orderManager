from flask import Blueprint, jsonify, request
from app.models import Solicitudes, db, Entregas, Usuarios

admin_bp = Blueprint('admin', __name__)


@admin_bp.route('/api/admin/solicitudes', methods=['GET'])
# Aquí debes implementar la lógica para obtener y devolver las solicitudes
def listar_solicitudes():
    solicitudes = Solicitudes.query.all()
    solicitudes_json = [
        {
            'idSolicitud': solicitud.idSolicitud,
            'cliente': solicitud.cliente,
            'fecha_entrega': solicitud.fecha_entrega,
            'lugar': solicitud.lugar,
            'nombre_recibe': solicitud.nombre_recibe,
            'telefono_recibe': solicitud.telefono_recibe,
            'cantidad_tanques': solicitud.cantidad_tanques,
            'cantidad_galones': solicitud.cantidad_galones,
            'cantidad_cuartos': solicitud.cantidad_cuartos,
            'cantidad_otros': solicitud.cantidad_otros,
            'fecha_solicitud': solicitud.fecha_solicitud,
            'cliente_credito': solicitud.cliente_credito,
            'origen_producto': solicitud.origen_producto,
            'preparacion': solicitud.preparacion,
            'idRTV': solicitud.idRTV,
            'idSolicitante': solicitud.idSolicitante,
            'Estado': solicitud.Estado
        }
        for solicitud in solicitudes
    ]
    return jsonify(solicitudes_json)


@admin_bp.route('/api/admin/aceptar-rechazar/<int:id_solicitud>', methods=['PUT'])
# Aquí debes implementar la lógica para aceptar o rechazar la solicitud
def aceptar_rechazar_solicitud(id_solicitud):
    solicitud = Solicitudes.query.get(id_solicitud)
    if solicitud is None:
        return jsonify({'error': 'Solicitud no encontrada'}), 404

    data = request.json
    if 'accion' in data:
        accion = data['accion']
        if accion == 'aceptar':
            solicitud.Estado = 'Aceptado'
            entrega = Entregas(
                idSolicitud=solicitud.idEntrega, estado='En espera de repartidor')
            db.session.add(entrega)
            db.session.commit()
            return jsonify({'mensaje': 'Solicitud aceptada y agregada a Entregas'})
        elif accion == 'rechazar':
            solicitud.Estado = 'Rechazado'
            db.session.commit()
            return jsonify({'mensaje': 'Solicitud rechazada exitosamente'})
        else:
            return jsonify({'error': 'Acción no válida'}), 400
    else:
        return jsonify({'error': 'Falta el campo "accion" en el JSON'}), 400


@admin_bp.route('/api/admin/asignar-entrega/<int:idSolicitud>/<int:idChofer>', methods=['PUT'])
# Aquí debes implementar la lógica para asignar la entrega a un repartidor
def asignar_entrega(idSolicitud, idChofer):
    solicitud = Solicitudes.query.get(idSolicitud)
    if solicitud is None:
        return jsonify({'error': 'Solicitud no encontrada'}), 404

    repartidor = Usuarios.query.get(idChofer)
    if repartidor is None:
        return jsonify({'error': 'Repartidor no encontrado'}), 404

    if repartidor.tipo == 'repartidor':
        entrega_existente = Entregas.query.filter_by(idSolicitud=idSolicitud).first()
        if entrega_existente:
            return jsonify({'error': 'La solicitud ya tiene una entrega asignada'}), 400

        nueva_entrega = Entregas(idSolicitud=idSolicitud, idChofer=repartidor.idUsuario, estado='pendiente')
        db.session.add(nueva_entrega)
        db.session.commit()
        return jsonify({'mensaje': f'Solicitud asignada al repartidor {repartidor.nombre} {repartidor.apellido}'})

    else:
        return jsonify({'error': 'El usuario no es de tipo "repartidor"'}), 400
    

@admin_bp.route('/api/admin/editar-entrega/<int:idEntrega>/repartidor/<int:idNuevoChofer>', methods=['PUT'])
def editar_entrega(idEntrega, idNuevoChofer):
    entrega = Entregas.query.get(idEntrega)
    if entrega is None:
        return jsonify({'error': 'Entrega no encontrada'}), 404

    nuevo_chofer = Usuarios.query.get(idNuevoChofer)
    if nuevo_chofer is None:
        return jsonify({'error': 'Nuevo repartidor no encontrado'}), 404

    if nuevo_chofer.tipo != 'repartidor':
        return jsonify({'error': 'El usuario seleccionado no es de tipo "repartidor"'}), 400

    entrega.idChofer = nuevo_chofer.idUsuario
    entrega.estado = 'pendiente'
    db.session.commit()

    return jsonify({'mensaje': f'Repartidor de la entrega actualizado a {nuevo_chofer.nombre} {nuevo_chofer.apellido}'})

