import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const navigate = useNavigate();

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={product.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center">
                    {product.name}
                </h2>
                <p>{product.dec}</p>
                <p>Available Stok : <span>{product.stock}</span></p>
                <p>Order Quantity : <span>75</span></p>
                <button onClick={() => navigate(`/productDetail/${product._id}`)} className='btn'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;