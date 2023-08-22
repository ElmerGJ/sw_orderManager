from flask import Blueprint, jsonify, request
from app.models import Solicitudes, db, Entregas, Usuarios

admin_bp = Blueprint('admin', __name__)


@admin_bp.route('/api/admin/solicitudes', methods=['GET'])
# Aquí debes implementar la lógica para obtener y devolver las solicitudes
def listar_solicitudes():
    solicitudes = Solicitudes.query.all()
    solicitudes_json = [
        {
            'idEntrega': solicitud.idEntrega,
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


################################################NO FUNCIONA##################################################

@admin_bp.route('/api/admin/asignar-entrega/<int:idSolicitud>/<int:idChofer>', methods=['PUT'])
# Aquí debes implementar la lógica para asignar la entrega a un repartidor
def asignar_entrega(idChofer, idSolicitud):
    entrega = Entregas.query.get(idSolicitud)
    if entrega is None:
        return jsonify({'error': 'Solicitud no encontrada'}), 404

    repartidor = Usuarios.query.get(idChofer)
    if repartidor is None:
        return jsonify({'error': 'Repartidor no encontrado'}), 404

    if repartidor.tipo == 'repartidor':
        data = request.json
        if 'accion' in data:
            accion = data['accion']
            if accion == 'aceptar':
                entrega = Entregas(idSolicitud=entrega.idSolicitud, idChofer=repartidor.idUsuario, estado='en camino')
                db.session.add(entrega)
                db.session.commit()
                return jsonify({'mensaje': 'Solicitud aceptada y asignada a un repartidor'})
            elif accion == 'rechazar':
                entrega.Estado = 'Rechazado'
                db.session.commit()
                return jsonify({'mensaje': 'Solicitud rechazada exitosamente'})
            else:
                return jsonify({'error': 'Acción no válida'}), 400
        else:
            return jsonify({'error': 'Falta el campo "accion" en el JSON'}), 400
    else:
        return jsonify({'error': 'El usuario no es de tipo "repartidor"'})