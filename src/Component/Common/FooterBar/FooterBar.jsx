import React from 'react';
import { Footer } from 'flowbite-react';
import logo from '../../../assets/images/icon/icon1.png'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
const FooterBar = () => {
    return (
        <div>
            <Footer container className='bg-green-300 '>
                <div className="w-full text-center">
                    <div className="w-full justify-between flex flex-col items-center sm:flex-row ">
                        <Footer.Brand
                            href="/"
                            src={logo}
                            alt="Food Share Hub Logo"
                            name="Food Share Hub"
                        />
                        <Footer.LinkGroup className='flex items-baseline flex-col sm:flex-row '>
                            <div>
                                <h1 className='border-b-2 pb-2 mb-2 text-black text-xl'>Address</h1>
                                <h2 className='text-black'>Dhaka, Bangladesh.</h2>
                            </div>
                            <div className='my-4 sm:mx-8'>
                                <h1 className='border-b-2 pb-2 mb-2 text-black text-xl'>Contact</h1>
                                <h2 className='text-black'>Mobile: 01XXXXXXXXX</h2>
                                <h3 className='text-black'>Email: abc@gmail.com</h3>
                            </div>
                        </Footer.LinkGroup>
                    </div>
                    <div className='flex gap-4 justify-center'>
                        <a href="https://www.facebook.com/"><FaFacebook className='w-8 h-8 text-black' ></FaFacebook ></a>
                        <a href="https://twitter.com/"><FaTwitter className='w-8 h-8 text-black' ></FaTwitter></a>
                        <a href="https://bd.linkedin.com/"><FaLinkedin className='w-8 h-8 text-black' ></FaLinkedin></a>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright by="Food Share Hub™" year={2023} />
                </div>
            </Footer>
        </div>
    );
};

export default FooterBar;