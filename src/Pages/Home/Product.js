import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const navigate = useNavigate();

    const decription = product.dec;
    const shortDec = decription.slice(0, 200);


    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-sm transition-all duration-200 ease-in-out">
            <figure><img className='h-80 w-full' src={product.image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <div className="flex justify-center ">
                    <h2 className="card-title  text-2xl text-primary ">
                        {product.name}
                    </h2>
                </div>
                <hr className=' border-green-700 ' />
                <h2 className="card-title text-lg text-gray-600 mt-2">
                    Price:  ${product.price}
                </h2>

                <p className=' text-xs text-left text-gray-600'>{shortDec}</p>
                <div className="w-full flex justify-between my-4">
                    <p className=' text-sm font-semibold '>Available Stock : <span className=' text-green-700'>{product.stock}</span></p>
                    <p className=' text-sm font-semibold '>Minimum Order: <span className=' text-green-700'>{product.miniQuantity}</span></p>
                </div>
                <button onClick={() => navigate(`/productDetail/${product._id}`)} className='btn'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;



