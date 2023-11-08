import React from 'react';
import { Avatar, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
const FeaturedFoodsCard = ({ food }) => {
    const { _id, Food_Image, Donator_Image, Donator_Name, Expired_Date, Expired_Time, Food_Name, Food_Quantity, Pickup_Location, Additional_Notes } = food;


    return (
        <div className='min-h-[500px]'>
            <div className="bg-base-100 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] shadow-xl border-4 border-pink-500 my-16 relative group rounded-xl">
                <img className='absolute top-0 left-0 w-full h-full rounded-lg' src={Food_Image} alt="" />
                <div className="rounded-xl absolute top-1/3 left-6 right-6 bg-black bg-opacity-60 text-white transform translate-z-20 scale-y-0 p-4 transition-transform transform-origin-top group-hover:scale-y-100 border-4 border-black">
                    <div className='min-h-[300] sm:min-h-[250px]'>
                        <h5 className="text-2xl font-bold tracking-tight text-white">
                            {Food_Name}
                        </h5>
                        <p className="border-b-2 my-2 pb-1"><span className='font-bold'>Quantity:</span> {Food_Quantity} </p>
                        <p className="border-b-2 my-2 pb-1"><span className='font-bold'>Expire-Date:</span> {moment(Expired_Date).format('DD-MM-YYYY, hh:mm')} </p>
                        <p className="border-b-2 my-2 pb-1"><span className='font-bold'>Pickup Point:</span> {Pickup_Location} </p>
                        <p className="border-b-2 my-2 pb-1"><span className='font-bold'>Note:</span> {Additional_Notes} </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Link className='flex-1 mr-4' to={`/food/${_id}`}> <Button className='w-full' gradientDuoTone="purpleToBlue">Details</Button></Link>
                        <div>
                            <h1 className='text-bold border-b-2'>Donator Info</h1>
                            <div className="flex flex-wrap gap-2">
                                <Avatar img={Donator_Image} rounded />
                                <p>{Donator_Name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoodsCard;