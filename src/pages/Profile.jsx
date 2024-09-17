import React from 'react';

const Profile = () => {
    const userEmail = "usuario@example.com"; // Email de usuario (puede ser dinámico en el futuro)

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card text-center shadow-lg" style={{ maxWidth: '400px' }}>
                <div className="card-header bg-primary text-white">
                    <h4>Perfil de Usuario</h4>
                </div>
                <div className="card-body">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="User Avatar" 
                        className="rounded-circle mb-4 img-thumbnail" 
                    />
                    <h5 className="card-title">Bienvenido</h5>
                    <p className="card-text text-muted mb-4">
                        <strong>Email:</strong> {userEmail}
                    </p>
                    <button className="btn btn-outline-primary btn-block">
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;