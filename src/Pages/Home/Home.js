import React from 'react';
import Footer from '../../Sheard/Footer';
import Navbar from '../../Sheard/Navbar';
import Bussiness from './Bussiness';
import Contact from './Contact';
import Header from './Header';
import Offer from './Offer';
import Products from './Products';
import Review from './Review';
import Team from './Team';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Products></Products>
            <Bussiness></Bussiness>
            <Review></Review>
            <Offer></Offer>
            <Team />
            <Contact></Contact>
        </div>
    );
};

export default Home;