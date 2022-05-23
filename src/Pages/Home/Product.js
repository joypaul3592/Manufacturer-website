import React from 'react';

const Product = ({ product }) => {

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
                <button className='btn'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;