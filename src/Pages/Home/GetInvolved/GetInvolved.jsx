import React from 'react';
import img1 from '../../../assets/images/icon/icon1.png'

const GetInvolved = () => {
    return (

        <div className='my-12'>
            <h1 className='text-5xl font-extrabold text-center my-12'>Get Involved</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ' >

                <div className='border bg-green-300 h-[400px] overflow-hidden relative rounded-xl my-4 duration-700 delay-150 hover:-translate-y-8'>
                    <div className='flex justify-center bg-black w-full h-full' style={{ clipPath: "circle(180px at center 0)" }} >
                        <img className='w-32 h-32' src={img1} alt="" />
                    </div>
                    <div className='absolute bottom-2 sm:bottom-10 p-2 sm:p-10'>
                        <h1 className='text-xl font-bold my-4'>Sign up as a community group</h1>
                        <p>Food Cloud Works With a network of more than thousand world community organizations. Join Us.</p>
                    </div>
                </div>
                <div className='border bg-pink-300 h-[400px] overflow-hidden relative rounded-xl my-4 duration-700 delay-150 hover:-translate-y-8'>
                    <div className='flex justify-center bg-black w-full h-full' style={{ clipPath: "circle(180px at center 0)" }} >
                        <img className='w-32 h-32' src={img1} alt="" />
                    </div>
                    <div className='absolute bottom-2 sm:bottom-10 p-2 sm:p-10'>
                        <h1 className='text-xl font-bold my-4'>Volunteer With Food Share</h1>
                        <p>Volunteers are essential in supporting our vision of a world where no good food goes to waste.</p>
                    </div>
                </div>
                <div className='border bg-green-300 h-[400px] overflow-hidden relative rounded-xl my-4 duration-700 delay-150 hover:-translate-y-8'>
                    <div className='flex justify-center bg-black w-full h-full' style={{ clipPath: "circle(180px at center 0)" }} >
                        <img className='w-32 h-32' src={img1} alt="" />
                    </div>
                    <div className='absolute bottom-2 sm:bottom-10 p-2 sm:p-10'>
                        <h1 className='text-xl font-bold my-4'>Partner with us</h1>
                        <p>If you are a food business or company that can supply essential food items, please get in touch.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInvolved;