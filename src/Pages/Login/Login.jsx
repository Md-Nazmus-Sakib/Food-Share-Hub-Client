import React, { useState } from 'react';
import { Button, Dropdown, Label, TextInput } from 'flowbite-react';
import bgImg from '../../assets/images/Login/login1.png'
import truck from '../../assets/images/Login/truck.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaExclamationTriangle, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';
import { Helmet } from 'react-helmet';
const Login = () => {
    const { signIn, setLoading, googleSignIn } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.form?.pathname || '/';
    const handelSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        setError('')


        signIn(email, password)
            .then(result => {
                const displayUser = result.user;
                console.log(displayUser)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
                setError(error.message)
            })
    }
    const handelGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoading(false)
                setError(error.message)
            })
    }
    const keyframes = `
    @keyframes animate {
        0% {
            transform: translateX(200%);
        }
        50% {
            transform: translateX(-200%);
        }
     
        50.01% {
            transform: translateX(-200%) rotateY(180deg);
        }
      
     
        100% {
            transform: translateX(200%) rotateY(180deg);
        }
     
    }
`;

    return (

        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${bgImg})`, backgroundSize: "cover" }} className='relative flex justify-center items-center w-full min-h-[800px]  overflow-hidden z-10'>

            <div>
                <Helmet>
                    <title>Food Share Hub | Login</title>
                </Helmet>
            </div>

            <style>{keyframes}</style>
            <img style={{ animation: 'animate 10s linear infinite' }} className='absolute mb-28' src={truck} alt="" />

            <div className="w-full md:w-2/3 lg:w-1/2 px-2 py-10 sm:p-20 bg-black bg-opacity-40 absolute rounded-xl">
                <h1 className='text-5xl font-semibold text-center text-white mb-6'>Login now!</h1>
                {/* login form  */}

                <form onSubmit={handelSignIn} className='flex flex-col gap-4'>

                    {/* email input field */}

                    <div>
                        <div className="mb-2 block ">
                            <Label className='text-white' htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" name='email' placeholder="name@name.com" required />
                    </div>

                    {/* password field  */}

                    <div>
                        <div className="mb-2 block">
                            <Label className='text-white' htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" name='password' type="password" required />
                    </div>

                    {/* error show */}

                    <div className='w-full rounded-xl pe-4 py-2 '>
                        {
                            error && <span className='text-red-600 font-extrabold flex flex-row items-center'><FaExclamationTriangle className='mx-4 text-xl' /> {error}  </span>
                        }
                    </div>
                    <Button className='bg-green-500' type="submit">Login</Button>
                </form>
                <h1 className='text-white my-4'>Don't Have Account Please <Link to={'/register'}><span className='font-extrabold text-xl mx-4'>Register</span></Link></h1>
                <Dropdown.Divider />

                {/* continue with google  */}

                <Button onClick={handelGoogleLogIn} className='bg-green-500 w-full my-4' type="submit"><FaGoogle className='mx-4'></FaGoogle>Continue With Google</Button>
            </div>
        </div>
    );
};

export default Login;