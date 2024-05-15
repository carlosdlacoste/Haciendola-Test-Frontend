import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/authContext';

export const NewProduct = () => {

    const [newProduct, setNewProduct] = useState({})
    const navigate = useNavigate()
    const { token } = useAuth()

    const addNewProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
            const data = await response.json()
            console.log(data)
            navigate("/products")
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    }

    return(
        <>
            {token ?
                <>
                    <div className="container my-5">
                        <h2 className="mb-4 text-center">Detalles del Producto</h2>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Handle</label>
                                <input type="text" className="form-control" id="username" placeholder="Handle" value={newProduct.handle || ''} onChange={(e) => setNewProduct({...newProduct, handle: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Title</label>
                                <input type="text" className="form-control" id="username" placeholder="Title" value={newProduct.title || ''} onChange={(e) => setNewProduct({...newProduct, title: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Descripcion</label>
                                <input type="text" className="form-control" id="username" placeholder="Descripcion" value={newProduct.descripcion || ''} onChange={(e) => setNewProduct({...newProduct, descripcion: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">SKU</label>
                                <input type="text" className="form-control" id="username" placeholder="SKU" value={newProduct.sku || ''} onChange={(e) => setNewProduct({...newProduct, sku: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Grams</label>
                                <input type="text" className="form-control" id="username" placeholder="Grams" value={newProduct.grams || ''} onChange={(e) => setNewProduct({...newProduct, grams: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Stock</label>
                                <input type="text" className="form-control" id="username" placeholder="Stock" value={newProduct.stock || ''} onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Price</label>
                                <input type="text" className="form-control" id="username" placeholder="Price" value={newProduct.price || ''} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Compare Price</label>
                                <input type="text" className="form-control" id="username" placeholder="Compare Price" value={newProduct.compare_price || ''} onChange={(e) => setNewProduct({...newProduct, compare_price: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold">Barcode</label>
                                <input type="text" className="form-control" id="username" placeholder="Barcode" value={newProduct.barcode || ''} onChange={(e) => setNewProduct({...newProduct, barcode: e.target.value})} />
                            </div>
                            <div className='d-flex justify-content-around'>
                                <button type="button" className="btn btn-success" onClick={(e) => addNewProduct(e)}>Crear Producto</button>
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