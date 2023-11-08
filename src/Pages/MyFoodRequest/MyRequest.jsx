import { Button } from 'flowbite-react';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MyRequest = ({ booking, handelCancelRequest }) => {
    // console.log(booking)
    const { _id, Food_Image, Food_Name, Donator_Name, Pickup_Location, Food_Quantity, Expired_Date, currentDate, money, Food_Status } = booking;
    return (
        <div className='my-4'>

            <div className='bg-[#D8E7CF] w-full min-h-screen'>


                <div className='flex flex-col md:flex-row gap-4'>
                    <img className='flex-1 md:w-1/3 object-cover pr-10' src={Food_Image} alt="" />
                    <div className='flex-1 w-full pr-5 py-12'>
                        <h1 className='text-2xl p-2 border-b-4 border-black pb-4 font-bold text-center'>{Food_Name}</h1>
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
                            <h1 className='text-xl font-bold'>Request Date </h1>
                            <p>{currentDate}</p>
                        </div>
                        <div className='flex justify-between w-full px-5 border-b-2 border-dashed border-black py-5'>
                            <h1 className='text-xl font-bold'>Donation Amount </h1>
                            <p>{money}</p>
                        </div>
                        <div className='flex mb-4 gap-2 justify-between w-full px-5 border-b-2 border-dashed border-black py-5'>
                            <h1 className='text-xl font-bold'>Status </h1>
                            <p>{Food_Status}</p>
                        </div>
                        {
                            (Food_Status === "available") ? <Button onClick={() => handelCancelRequest(_id)} className='w-full my-8' gradientDuoTone="purpleToBlue">Cancel</Button> :
                                <Button className='w-full my-8' gradientDuoTone="greenToBlue">Delivered</Button>
                        }

                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyRequest;



// Additional_Notes
// :
// "hi tooooo"
// Donator_Email
// :
// "asd@asd.com"
// Donator_Image
// :
// "https://assets.telegraphindia.com/abp/2020/9/5/1606451868_5fc0829c4cd26_sakib.jpg"
// Donator_Name
// :
// "asd"
// Expired_Date
// :
// "2023-11-17"
// Food_Image
// :
// "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/10/5/3/FNM_110111-WE-Dinners-010_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371602769537.jpeg"
// Food_Name
// :
// "Noodseffffffff"
// Food_Quantity
// :
// 5
// Food_Status
// :
// "available"
// Pickup_Location
// :
// "Dhaka , Bangladesh"
// Requester_Email
// :
// "asd@asd.com"
// Requester_Img
// :
// "https://assets.telegraphindia.com/abp/2020/9/5/1606451868_5fc0829c4cd26_sakib.jpg"
// Requester_Name
// :
// "asd"
// addNote
// :
// "hitttt"
// currentDate
// :
// "07-11-2023, 09:19"
// food_id
// :
// "654a54d0a825994c53402926"
// money
// :
// 12
// _id
// :
// "654a5576a825994c53402927"