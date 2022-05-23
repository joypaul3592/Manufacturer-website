import React from 'react';
import useProduct from '../../Hook/useProduct';
import Product from './Product';

const Products = () => {


    const [products, setProducts] = useProduct();

    console.log(products)

    return (
        <div>
            <h1 className=' my-20 text-4xl text-center text-primary font-bold'>BEST SELLER PRODUCT</h1>
            <div className=' max-w-7xl mx-auto px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10'>
                {
                    products.map(product => <Product key={product._id} product={product} ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;