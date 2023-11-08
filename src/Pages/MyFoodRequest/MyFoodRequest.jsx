import React from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import useAuth from '../../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import MyRequest from './MyRequest';
import Swal from 'sweetalert2';
import { Spinner } from 'flowbite-react';

const MyFoodRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const url = `/booking-food/${user?.email}`;
    // console.log(url)
    const { data: myBookings = [], isLoading, refetch } = useQuery({
        queryKey: ['myBooking'],
        queryFn: async () => {
            const res = await axiosSecure.get(url);

            return res.data;
        }
    });
    if (isLoading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>;
    }
    const handelCancelRequest = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/booking-food/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your food request has been canceled successfully.',

                            )
                        }

                    })
            }
        })

    }

    return (
        <div className='min-h-[500px]'>
            {
                myBookings.length > 0 ?
                    <div>
                        {
                            myBookings.map(booking => <MyRequest
                                key={booking._id}
                                booking={booking}
                                handelCancelRequest={handelCancelRequest}
                            ></MyRequest>)
                        }
                    </div> :
                    <div className='flex justify-center items-center h-[300px]'>
                        <p className='text-3xl font-bold'> "No food Request have been added yet. Please request food items."</p>
                    </div>
            }
        </div>
    );
};

export default MyFoodRequest;