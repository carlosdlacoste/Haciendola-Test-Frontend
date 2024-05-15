import React, { useState, useEffect } from 'react';

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Función para obtener los productos desde el backend
        const getProducts = async () => {
        try {
            const response = await fetch('/api/products');
            if (response.ok) {
            const data = await response.json();
            setProducts(data);
            } else {
            console.error('Error al obtener los productos:', response.statusText);
            }
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
        };

        getProducts();
    }, []);

    return (
        <div className="container mt-5">
        <h2 className="mb-4 text-center">Productos</h2>
        <table className="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Handle</th>
                <th>Title</th>
                <th>Descripción</th>
                <th>SKU</th>
                <th>Grams</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Compare_Price</th>
                <th>Barcode</th>
            </tr>
            </thead>
            <tbody>
            {products.map(product => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.handle}</td>
                    <td>{product.title}</td>
                    <td>{product.descripcion}</td>
                    <td>{product.sku}</td>
                    <td>{product.grams}</td>
                    <td>{product.stock}</td>
                    <td>{product.price}</td>
                    <td>{product.compare_price}</td>
                    <td>{product.barcode}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};
