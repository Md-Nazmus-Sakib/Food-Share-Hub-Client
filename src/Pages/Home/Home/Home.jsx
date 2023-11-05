import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedFoods from '../FeaturedFoods/FeaturedFoods';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const featuredFoods = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
        </div>
    );
};

export default Home;