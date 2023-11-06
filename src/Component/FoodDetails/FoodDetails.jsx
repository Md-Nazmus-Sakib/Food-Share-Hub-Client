import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import OpenModal from '../OpenModal/OpenModal';

const FoodDetails = () => {
    const food = useLoaderData();
    // console.log(food)
    const { _id, Food_Image, Donator_Image, Donator_Name, Expired_Date, Expired_Time, Food_Name, Food_Quantity, Pickup_Location, Additional_Notes } = food;
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='bg-[#D8E7CF] w-full min-h-screen'>
            <div className='flex flex-col md:flex-row gap-4'>
                <img className='flex-1 md:w-1/3 object-cover pr-10' src={Food_Image} alt="" />
                <div className='flex-1 w-full pr-5 py-12'>
                    <h1 className='text-5xl border-b-4 border-black pb-4 font-bold text-center'>{Food_Name}</h1>
                    <div className='flex justify-between w-full px-5 border-b-2 border-dashed border-black py-5'>
                        <h1 className='text-xl font-bold'>Donar Name </h1>
                        <p>{Donator_Name}</p>
                    </div>
                    <div className='flex justify-between w-full px-5 border-b-2 border-dashed border-black py-5'>
                        <h1 className='text-xl font-bold'>Pickup Point </h1>
                        <p className='flex flex-row items-center gap-4'><FaMapMarkerAlt className='w-8 h-8 text-red-500'></FaMapMarkerAlt> {Pickup_Location}</p>
                    </div>
                    <div className='flex justify-between w-full px-5 border-b-2 border-dashed border-black py-5'>
                        <h1 className='text-xl font-bold'>Food Quantity/Person </h1>
                        <p>{Food_Quantity}</p>
                    </div>
                    <div className='flex justify-between w-full px-5 border-b-2 border-dashed border-black py-5'>
                        <h1 className='text-xl font-bold'>Expire Date </h1>
                        <p>{Expired_Date}</p>
                    </div>
                    <div className='flex justify-between w-full px-5 border-b-2 border-dashed border-black py-5'>
                        <h1 className='text-xl font-bold'>Expire Time </h1>
                        <p>{Expired_Time}</p>
                    </div>
                    <div className='flex mb-4 gap-2 justify-between w-full px-5 border-b-2 border-dashed border-black py-5'>
                        <h1 className='text-xl font-bold'>Note </h1>
                        <p>{Additional_Notes}</p>
                    </div>
                    <Button onClick={() => setOpenModal(true)} className='w-full my-8' gradientDuoTone="purpleToBlue">Proceed</Button>

                </div>
            </div>
            <OpenModal setOpenModal={setOpenModal} openModal={openModal} food={food} ></OpenModal>
        </div>
    );
};

export default FoodDetails;