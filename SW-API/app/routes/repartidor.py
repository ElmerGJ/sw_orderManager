from flask import Blueprint, jsonify

repartidor_bp = Blueprint('repartidor', __name__)

@repartidor_bp.route('/api/repartidor/entregas', methods=['GET'])
def listar_entregas():
    # Aquí debes implementar la lógica para obtener y devolver las entregas asignadas
    return jsonify({"mensaje": "Lista de entregas"})

@repartidor_bp.route('/api/repartidor/completar-entrega/<int:id_entrega>', methods=['POST'])
def completar_entrega(id_entrega):
    # Aquí debes implementar la lógica para marcar la entrega como completada
    return jsonify({"mensaje": "Entrega completada"})
