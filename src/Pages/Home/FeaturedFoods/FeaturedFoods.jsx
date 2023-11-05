import React from 'react';
import FeaturedFoodsCard from './FeaturedFoodsCard';

const FeaturedFoods = ({ featuredFoods }) => {
    // console.log(featuredFoods)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12'>
            {
                featuredFoods.map(food => <FeaturedFoodsCard
                    key={food._id}
                    food={food}
                ></FeaturedFoodsCard>)
            }
        </div>
    );
};

export default FeaturedFoods;