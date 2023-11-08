import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedFoods from '../FeaturedFoods/FeaturedFoods';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GetInvolved from '../GetInvolved/GetInvolved';
import WhatToKnow from '../WhatToKnow/WhatToKnow';

const Home = () => {
    const featuredFoods = useLoaderData();
    return (
        <div>
            <div>
                <Helmet>
                    <title>Food Share Hub | Home</title>
                </Helmet>
            </div>

            <Banner></Banner>
            <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
            <GetInvolved></GetInvolved>
            <WhatToKnow></WhatToKnow>
        </div>
    );
};

export default Home;