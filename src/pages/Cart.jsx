import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
    const { cartItems, totalPrice } = useContext(CartContext);  // Obtener items del carrito y el precio total desde CartContext
    const { token } = useContext(UserContext);  // Obtener el token desde el UserContext

    return (
        <div className="container mt-5">
            <h2>Carrito de Compras</h2>
            <ul className="list-group">
                {cartItems.length === 0 ? (
                    <li className="list-group-item">El carrito está vacío</li>
                ) : (
                    cartItems.map((pizza) => (
                        <li className="list-group-item d-flex align-items-center" key={pizza.id}>
                            <img src={pizza.img} alt={pizza.name} style={{ width: '50px', marginRight: '10px' }} />
                            <span>{pizza.name}</span> 
                            <span className="ms-auto">{pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })} x {pizza.quantity}</span>
                        </li>
                    ))
                )}
            </ul>
            <h3 className="mt-3">Total: {totalPrice.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h3>
            <button 
                className="btn btn-primary mt-3" 
                disabled={!token}  // Deshabilitar el botón "Pagar" si no hay token
            >
                Pagar
            </button>
            {!token && <p className="text-danger mt-2">Debes estar logueado para realizar el pago.</p>} {/* Mostrar mensaje si no hay token */}
        </div>
    );
};

export default Cart;