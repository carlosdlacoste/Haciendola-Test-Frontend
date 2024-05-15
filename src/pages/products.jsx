import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/authContext';

export const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { token } = useAuth()

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
        <>
            {token ?
            <>
                <div className="container mt-5">
                    <h2 className="mb-4 text-center">Productos</h2>
                    <div className='my-3 d-flex justify-content-center'>
                        <button className="btn btn-success" onClick={() => navigate('/products/new')}>Agregar Producto</button>
                    </div>
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
                            <tr key={product.id} style={{cursor: 'pointer'}} onClick={() => navigate(`/products/${product.id}`)}>
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
            </>
            :
            <>
                <div className="alert alert-danger text-center mt-5">Error! Usted no se encuentra autenticado, por favor dirigase al formulario Log In.</div>
            </>
            }

        </>
    );
};
