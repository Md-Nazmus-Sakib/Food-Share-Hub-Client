import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import banner_1 from '../../../assets/images/Banner/banner-1.jpg'
import banner_2 from '../../../assets/images/Banner/banner-2.jpg'
import banner_3 from '../../../assets/images/Banner/banner-3.jpg'
import banner_4 from '../../../assets/images/Banner/banner-4.jpg'
import banner_5 from '../../../assets/images/Banner/banner-5.jpg'
import banner_6 from '../../../assets/images/Banner/banner-6.jpg'
import down_arrow from '../../../assets/images/icon/down arrow.png'


const Banner = () => {
    const settings = {
        arrows: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,

        autoplay: true,
        autoplaySpeed: 1500,
    };

    const keyframes = `
    @keyframes animateBg {
        100% {
            filter: hue-rotate(360deg);
        }
    }
`;

    return (

        <div>
            <style>{keyframes}</style>
            <div style={{ animation: 'animateBg 10s linear infinite' }} className='py-4 rounded-b-xl relative min-h-[600px] flex justify-center items-center flex-col md:flex-row bg-[#D8E7CF] text-black  overflow-hidden'>
                <div className='w-full md:w-1/2 flex justify-center items-center relative pb-20'>
                    <div className='w-full p-4 text-center mx-auto mb-4'>
                        <h1 className='text-5xl md:text-3xl lg:text-5xl font-extrabold my-4 uppercase'>Let's Fight <span className='text-blue-500'> Food <br /> Waste </span>Together</h1>
                        <p>Food Waste is a big problem and we can be a solution. Too good to go in this site that lets you rescue unsold food at your favorite spots from an ultimately fate.</p>

                    </div>
                    <div className="absolute bottom-8 animate-bounce w-12 h-12">
                        <img src={down_arrow} alt="" />
                    </div>

                </div>



                <div className='w-full h-full md:w-1/2'>
                    <Slider {...settings}>
                        <div className='rounded-xl overflow-hidden'>
                            <img src={banner_1} alt="" />
                        </div>

                        <div className='rounded-xl overflow-hidden'>
                            <img src={banner_2} alt="" />
                        </div>

                        <div className='rounded-xl overflow-hidden'>
                            <img src={banner_3} alt="" />
                        </div>

                        <div className='rounded-xl overflow-hidden'>
                            <img src={banner_4} alt="" />
                        </div>

                        <div className='rounded-xl overflow-hidden'>
                            <img src={banner_5} alt="" />
                        </div>
                        <div className='rounded-xl overflow-hidden'>
                            <img src={banner_6} alt="" />
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Banner;