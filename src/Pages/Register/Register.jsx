import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { FaExclamationTriangle, FaGoogle } from 'react-icons/fa';
import imgBg from '../../assets/images/Login/register1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { createUser, updateUserProfile, setLoading } = useAuth();

    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        setError('')
        if (password.length < 6) {
            return setError('password must be gater than 6 character or longer.')
        }
        else if (!/^(?=.*[A-Z]).*$/.test(password)) {
            return setError('password must be one upper case')
        }
        else if (! /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            return setError('password must be one special Character')
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(name, photo)
                    .then(() => {
                        form.reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Register Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setLoading(false)
                        navigate('/')

                    })
                    .catch(error => {

                        setError(error.message)
                        setLoading(false)
                    })
            })
            .catch(error => {

                setError(error.message)
                setLoading(false)
            })
    }

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
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${imgBg})`, backgroundSize: "cover", animation: 'animateBg 10s linear infinite' }} className='relative flex justify-center items-center w-full min-h-[800px]  overflow-hidden z-10'>


                <div className="w-full md:w-2/3 lg:w-1/2 px-2 py-10 sm:p-20 bg-black bg-opacity-40 absolute rounded-xl">
                    <h1 className='text-5xl font-semibold text-center text-white mb-6'>Register now!</h1>
                    {/* login form  */}

                    <form onSubmit={handelRegister} className='flex flex-col gap-4'>

                        {/* email input field */}

                        <div>
                            <div className="mb-2 block ">
                                <Label className='text-white' htmlFor="name1" value="Your Name" />
                            </div>
                            <TextInput id="name1" type="text" name='name' placeholder="name" required />
                        </div>
                        {/* email input field */}

                        <div>
                            <div className="mb-2 block ">
                                <Label className='text-white' htmlFor="photo1" value="Your photo" />
                            </div>
                            <TextInput id="photo1" type="text" name='photo' placeholder="Photo Url" required />
                        </div>
                        {/* email input field */}

                        <div>
                            <div className="mb-2 block ">
                                <Label className='text-white' htmlFor="email2" value="Your email" />
                            </div>
                            <TextInput id="email2" type="email" name='email' placeholder="name@name.com" required />
                        </div>

                        {/* password field  */}

                        <div>
                            <div className="mb-2 block">
                                <Label className='text-white' htmlFor="password2" value="Your password" />
                            </div>
                            <TextInput id="password2" name='password' type="password" required />
                        </div>

                        {/* error show */}

                        <div >
                            {
                                error && <span className='text-red-600 font-extrabold flex flex-row items-center bg-white w-full rounded-xl pe-4 py-2 '><FaExclamationTriangle className='mx-4 text-xl' /> {error}  </span>
                            }
                        </div>
                        <Button className='bg-green-500' type="submit">Register</Button>
                    </form>
                    <h1 className='text-white my-4'>Already Have Account Please <Link to={'/login'}><span className='font-extrabold text-xl mx-4'>Login</span></Link></h1>

                </div>
            </div>
        </div>
    );
};

export default Register;