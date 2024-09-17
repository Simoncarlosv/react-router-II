import React, { useEffect, useState } from 'react';

const Pizza = () => {
    const { id } = useParams();  // Obtener el id de la pizza desde la URL
    const [pizza, setPizza] = useState(null);

    // Consumir la API para obtener los detalles de una pizza específica (id fijo "p001")
    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas/p001');
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error("Error fetching pizza details:", error);
            }
        };
        fetchPizza();
    }, [id]);

    if (!pizza) {
        return <div>Cargando detalles de la pizza...</div>;
    }

    return (
        <div className="container">
            <div className="card">
                <img src={pizza.img} alt={pizza.name} className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">{pizza.name}</h2>
                    <p className="card-text"><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
                    <p className="card-text"><strong>Precio:</strong> {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                    <p className="card-text"><strong>Descripción:</strong> {pizza.desc}</p>
                    <button className="btn btn-primary">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;