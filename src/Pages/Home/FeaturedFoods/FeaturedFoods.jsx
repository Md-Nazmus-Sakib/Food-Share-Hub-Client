import React from 'react';
import FeaturedFoodsCard from './FeaturedFoodsCard';
import { Button } from 'flowbite-react';
import hand_icon from '../../../assets/images/icon/hand-icon.png'
import { Link } from 'react-router-dom';

const FeaturedFoods = ({ featuredFoods }) => {
    // console.log(featuredFoods)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {
                    featuredFoods.map(food => <FeaturedFoodsCard
                        key={food._id}
                        food={food}

                    ></FeaturedFoodsCard>)
                }

            </div>
            <div className='flex justify-center my-12'>
                <div className='flex flex-col items-center'>
                    <Link to={'/available'}> <Button className='w-48 sm:w-96 mb-12' gradientDuoTone="purpleToBlue">Show All</Button></Link>

                    <img className="animate-bounce w-12 h-12 " src={hand_icon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoods;