import { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Función para agregar un producto al carrito
    const addToCart = (pizza) => {
        setCartItems((prevItems) => {
            const itemInCart = prevItems.find((item) => item.id === pizza.id);
            if (itemInCart) {
                return prevItems.map((item) =>
                    item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...pizza, quantity: 1 }];
            }
        });
    };

    // Función para reducir la cantidad de un producto en el carrito
    const decreaseQuantity = (pizzaId) => {
        setCartItems((prevItems) => {
            return prevItems
                .map((item) =>
                    item.id === pizzaId
                        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                        : item
                )
                .filter(item => item.quantity > 0); // Eliminar productos con cantidad 0
        });
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (pizzaId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== pizzaId)
        );
    };

    // Obtener el total del carrito
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, decreaseQuantity, removeFromCart, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};