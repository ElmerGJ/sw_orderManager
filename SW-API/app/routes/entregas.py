from flask import jsonify, request, Blueprint
from app.models import Entregas, Solicitudes, Usuarios, db


entregas_bp = Blueprint('entregas', __name__)


@entregas_bp.route('/api/entregas', methods=['POST'])
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
    # Código para crear una entrega
pass

# Otras rutas y funciones relacionadas con entregas
