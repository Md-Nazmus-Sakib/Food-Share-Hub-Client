import React from 'react';
import { Avatar, Button, Card } from 'flowbite-react';
const FeaturedFoodsCard = ({ food }) => {
    const { _id, Food_Image, Donator_Image, Donator_Name, Expired_Date, Expired_Time, Food_Name, Food_Quantity, Pickup_Location, Additional_Notes } = food;


    return (
        <div className=''>
            <Card
                className=" bg-green-300"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={Food_Image}
            >
                <div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {Food_Name}
                    </h5>
                    <p className="border-b-2 my-2 font-bold"><span className='text-extrabold text-xl'>Quantity:</span> {Food_Quantity} </p>
                    <p className="border-b-2 my-2 font-bold"><span className='text-extrabold text-xl'>Expire-Date:</span> {Expired_Date} </p>
                    <p className="border-b-2 my-2 font-bold"><span className='text-extrabold text-xl'>Expire-time:</span> {Expired_Time} </p>
                    <p className="border-b-2 my-2 font-bold"><span className='text-extrabold text-xl'>Pickup Point:</span> {Pickup_Location} </p>
                    <p className="border-b-2 my-2 font-bold"><span className='text-extrabold text-xl'>Note:</span> {Additional_Notes} </p>
                </div>
                <div className='flex justify-between items-center'>
                    <Button gradientDuoTone="purpleToBlue">Details</Button>
                    <div>
                        <h1 className='text-bold border-b-2'>Donator Info</h1>
                        <div className="flex flex-wrap gap-2">
                            <Avatar img={Donator_Image} rounded />
                            <p>{Donator_Name}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default FeaturedFoodsCard;