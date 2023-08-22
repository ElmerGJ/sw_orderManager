# app/__init__.py
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secreto'
CORS(app, supports_credentials=True)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:0401@localhost:3306/OrderManagement'

# Inicializa la extensión SQLAlchemy solo una vez
db = SQLAlchemy(app)

jwt = JWTManager(app)

# Importa los modelos después de inicializar db
from app.models import Usuarios, Entregas, Solicitudes

# Importa las rutas después de inicializar db
from app.routes import usuarios, solicitudes, entregas, admin, cliente

app.register_blueprint(usuarios.usuarios_bp)
app.register_blueprint(cliente.cliente_bp)
app.register_blueprint(admin.admin_bp)
app.register_blueprint(solicitudes.solicitudes_bp)
app.register_blueprint(entregas.entregas_bp)
