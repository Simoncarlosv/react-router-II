import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
    const { cartItems, totalPrice, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
    const { token } = useContext(UserContext);

    return (
        <div className="container mt-5">
            <h2>Carrito de Compras</h2>
            <ul className="list-group">
                {cartItems.map((pizza) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={pizza.id}>
                        <div className="d-flex align-items-center">
                            <img src={pizza.img} alt={pizza.name} style={{ width: '50px', marginRight: '10px' }} />
                            <span>{pizza.name} - {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</span>
                        </div>
                        <div>
                            <button className="btn btn-secondary btn-sm" onClick={() => decreaseQuantity(pizza.id)}>-</button>
                            <span className="mx-2">{pizza.quantity}</span>
                            <button className="btn btn-secondary btn-sm" onClick={() => increaseQuantity(pizza.id)}>+</button>
                            <button className="btn btn-danger btn-sm ms-2" onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className="mt-3">Total: {totalPrice.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h3>
            <button className="btn btn-primary mt-3" disabled={!token}>Pagar</button> {/* Deshabilitar el botón si no hay token */}
        </div>
    );
};

export default Cart;