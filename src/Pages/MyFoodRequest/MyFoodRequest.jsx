import React from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import useAuth from '../../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyFoodRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const url = user ? `/booking-food/${user?.email}` : null;
    // console.log(url)
    const { data: myBooking = [], isLoading, refetch } = useQuery({
        queryKey: ['myBooking'],
        queryFn: async () => {
            const res = await axiosSecure.get(url);

            return res.data;
        }
    });
    console.log(myBooking)

    return (
        <div className='min-h-[500px]'>

        </div>
    );
};

export default MyFoodRequest;