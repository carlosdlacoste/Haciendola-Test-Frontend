import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/authContext';

export const ProductDetails = () =>{
    const { id } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth()
    const [product, setProduct] = useState();
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        handle: '',
        title: '',
        descripcion: '',
        sku: '',
        grams: '',
        stock: '',
        price: '',
        compare_price: '',
        barcode: ''
    });

    useEffect(() => {
        // Función para obtener los detalles del producto desde el backend
        const getProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                if (response.ok) {
                const data = await response.json();
                setProduct(data);
                setFormData({
                    handle: data.handle,
                    title: data.title,
                    descripcion: data.descripcion,
                    sku: data.sku,
                    grams: data.grams,
                    stock: data.stock,
                    price: data.price,
                    compare_price: data.compare_price,
                    barcode: data.barcode
                })
                } else {
                console.error('Error al obtener los detalles del producto:', response.statusText);
                }
            } catch (error) {
                console.error('Error al obtener los detalles del producto:', error);
            }
            };

            getProduct();
    }, [id]);

    const handleEdit = () => {
        setEditing(true);
    }

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/products/${id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setEditing(false);
                // Actualizar los detalles del producto después de la edición
                setProduct(prevProduct => ({
                    ...prevProduct,
                    handle: formData.handle,
                    title: formData.title,
                    descripcion: formData.descripcion,
                    sku: formData.sku,
                    grams: formData.grams,
                    stock: formData.stock,
                    price: formData.price,
                    compare_price: formData.compare_price,
                    barcode: formData.barcode
                }));
                navigate('/products')
            } else {
                console.error('Error al editar el producto:', response.statusText);
            }
        } catch (error) {
            console.error('Error al editar el producto:', error);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/products/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                navigate('/products'); // Redirigir a la página de productos después de eliminar
            } else {
                console.error('Error al eliminar el producto:', response.statusText);
            }
            } catch (error) {
            console.error('Error al eliminar el producto:', error);
            }
        };

    return (
        <>
            {
                token ?
                <>
                    <div className="container my-5">
                        <h2 className="mb-4 text-center">Detalles del Producto</h2>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Handle</label>
                                <input type="text" className="form-control" id="username" placeholder="Handle" value={formData.handle || ''} onChange={(e) => setFormData({...formData, handle: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Title</label>
                                <input type="text" className="form-control" id="username" placeholder="Title" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Descripcion</label>
                                <input type="text" className="form-control" id="username" placeholder="Descripcion" value={formData.descripcion || ''} onChange={(e) => setFormData({...formData, descripcion: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">SKU</label>
                                <input type="text" className="form-control" id="username" placeholder="SKU" value={formData.sku || ''} onChange={(e) => setFormData({...formData, sku: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Grams</label>
                                <input type="text" className="form-control" id="username" placeholder="Grams" value={formData.grams || ''} onChange={(e) => setFormData({...formData, grams: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Stock</label>
                                <input type="text" className="form-control" id="username" placeholder="Stock" value={formData.stock || ''} onChange={(e) => setFormData({...formData, stock: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Price</label>
                                <input type="text" className="form-control" id="username" placeholder="Price" value={formData.price || ''} onChange={(e) => setFormData({...formData, price: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Compare Price</label>
                                <input type="text" className="form-control" id="username" placeholder="Compare Price" value={formData.compare_price || ''} onChange={(e) => setFormData({...formData, compare_price: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Barcode</label>
                                <input type="text" className="form-control" id="username" placeholder="Barcode" value={formData.barcode || ''} onChange={(e) => setFormData({...formData, barcode: e.target.value})} />
                            </div>
                            <div className='d-flex justify-content-around'>
                                <button type="button" className="btn btn-primary" onClick={(e) => handleSave(e)}>Guardar cambios</button>
                                <button type="button" className="btn btn-danger" onClick={(e) => handleDelete(e)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="alert alert-danger text-center mt-5">Error! Usted no se encuentra autenticado, por favor dirigase al formulario Log In.</div>
                </>
            }
        </>
    )
}