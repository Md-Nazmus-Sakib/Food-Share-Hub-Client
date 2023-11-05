import React from 'react';
import FoodCard from './FoodCard';

const AllFood = ({ allFood }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12'>
            {
                allFood.map(food => <FoodCard
                    key={food._id}
                    food={food}
                ></FoodCard>)
            }
        </div>
    );
};

export default AllFood;