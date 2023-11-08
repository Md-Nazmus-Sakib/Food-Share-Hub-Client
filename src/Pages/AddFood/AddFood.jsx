import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react';
import imgBg from '../../assets/images/Other/Home_Header_Truck-1024x646.png'
import useAuth from '../../Hook/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import moment from 'moment';
import { Helmet } from 'react-helmet';

const AddFood = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const handelAddFood = (e) => {
        e.preventDefault();
        const form = e.target;
        const Food_Name = form.Food_Name.value;
        const Food_Image = form.Food_Image.value;
        const Food_Quantity = parseInt(form.Food_Quantity.value);
        const Pickup_Location = form.Pickup_Location.value;
        const ExpDate = form.Expired_Date.value;
        const Expired_Date = moment(ExpDate).format('DD-MM-YYYY, hh:mm')
        const Additional_Notes = form.Additional_Notes.value;

        const addFood = {
            Food_Name, Food_Image, Food_Quantity, Pickup_Location, Expired_Date, Additional_Notes, Food_Status: 'available', Donator_Name: user?.displayName, Donator_Email: user?.email, Donator_Image: user?.photoURL
        }
        console.log(Expired_Date)
        axiosSecure.post('/food', addFood)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food Added Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                }
            })

    }

    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${imgBg})`, backgroundSize: "cover", animation: 'animateBg 10s linear infinite' }} className='py-12 min-h-screen flex justify-center items-center'>
            <form onSubmit={handelAddFood} className='border w-full sm:w-2/3 p-2 sm:p-10 h-full bg-[#D8E7CF] bg-opacity-40 rounded-xl'>
                <div>
                    <Helmet>
                        <title>Food Share Hub | Add Food</title>
                    </Helmet>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label className='font-bold text-xl' htmlFor="text33" value="Food Name" />
                        </div>
                        <TextInput id="text33" name='Food_Name' placeholder='food name' type="text" />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label className='font-bold text-xl' htmlFor="text44" value="Food Image" />
                        </div>
                        <TextInput id="text44" name='Food_Image' placeholder='Food photo url' type="text" />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label className='font-bold text-xl' htmlFor="num55" value="Food Quantity" />
                        </div>
                        <TextInput id="num55" name='Food_Quantity' placeholder='food quantity/person' type="number" required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label className='font-bold text-xl' htmlFor="text66" value="Pick Up Point" />
                        </div>
                        <TextInput id="text66" name='Pickup_Location' type="text" placeholder='Pickup Location' required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label className='font-bold text-xl' htmlFor="text7" value="Expire Date" />
                        </div>
                        <TextInput id="text7" name='Expired_Date' type="date" required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label className='font-bold text-xl' htmlFor="text88" value="Additional Notes" />
                        </div>
                        <Textarea id="text88" name='Additional_Notes' type="text" placeholder='note' />
                    </div>


                </div>


                <div className='flex justify-center my-8'>
                    <Button className='w-64 sm:w-96 mb-12 uppercase font-bold text-xl' gradientDuoTone="purpleToBlue" type="submit" >Submit</Button>
                </div>

            </form>
        </div>
    );
};

export default AddFood;