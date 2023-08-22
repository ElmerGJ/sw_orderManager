from flask import jsonify, request, Blueprint
from app.models import Usuarios, db
from flask_jwt_extended import create_access_token
from sqlalchemy.exc import SQLAlchemyError

bp = Blueprint('authentication', __name__)


@bp.route('/api/login', methods=['POST'])
def login():
    correo = request.json['correo']
    password = request.json['password']

    try:
        authenticate(correo, password)
    except SQLAlchemyError:
        db.session.rollback()
        return jsonify({"error": "Error en la base de datos"}), 500
    # Código para manejar la autenticación y generar el token JWT
pass

# Otras rutas y funciones relacionadas con autenticación
def authenticate(correo, password):
    user = Usuarios.query.filter_by(correo=correo).first()
    if user and user.password == password:
        token = create_access_token(identity=user.idUsuario)
        return jsonify({"mensaje": "Inicio de sesión exitoso", "token": token, "user": user})
    else:
        return jsonify({"error": "Credenciales inválidas"}), 401
