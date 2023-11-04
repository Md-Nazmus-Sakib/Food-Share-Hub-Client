import React from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../../../assets/images/icon/icon1.png'
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='g-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
            <Navbar fluid rounded className='bg-green-300'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Food Share Hub</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <NavLink className='font-semibold' to={'/login'}>Login</NavLink>
                    {/* <Dropdown
                        arrowIcon={false}
                        inline

                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >

                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>

                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown> */}
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="/" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
};

export default NavigationBar;