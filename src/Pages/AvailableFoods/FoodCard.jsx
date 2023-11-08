import { Avatar, Button, Card } from 'flowbite-react';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    const { _id, Food_Image, Donator_Image, Donator_Name, Expired_Date, Food_Name, Food_Quantity, Pickup_Location, Additional_Notes } = food;
    return (
        <div className='min-h-[500px]'>
            <Card
                className=" bg-green-300"

            >
                <img className='h-[150] sm:h-[250px] w-full object-cover rounded-xl' src={Food_Image} alt="" />
                <div className='h-[300] sm:h-[250px]'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                        <div className="flex flex-row gap-2">
                            <Avatar img={Donator_Image} rounded />
                            <p>{Donator_Name}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default FoodCard;