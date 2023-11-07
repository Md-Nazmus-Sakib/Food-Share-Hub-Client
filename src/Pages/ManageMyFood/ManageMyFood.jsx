
import useAuth from '../../Hook/useAuth';
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
import ManageMyFoodTable from './ManageMyFoodTable';
import Swal from 'sweetalert2';
import EditMyFood from '../../Component/EditMyFood/EditMyFood';
import { useState } from 'react';
import FoodStatus from './FoodStatus/FoodStatus';
import { FaBootstrap } from 'react-icons/fa';
import { Spinner } from 'flowbite-react';
import useAxiosSecure from '../../Hook/useAxiosSecure';


const ManageMyFood = () => {
    const { user } = useAuth();
    const [openModal, setOpenModal] = useState(false);
    const [foodStatusModal, setFoodStatusModal] = useState(false);

    const [bookedItems, setBookedItems] = useState([]);
    const [editFood, setEditFood] = useState({});
    const axiosSecure = useAxiosSecure();
    const url = user ? `/food?email=${user.email}` : null;
    // console.log(url)
    const { data: myFood = [], isLoading, refetch } = useQuery({
        queryKey: ['myFood'],
        queryFn: async () => {
            const res = await axiosSecure.get(url);

            return res.data;
        }
    });


    const { data: bookings = [], isLoading: loader } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking-food/${user?.email}`);

            return res.data;
        }
    });

    // console.log(bookings)
    if (isLoading || loader) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>;
    }


    const handelDelete = (id) => {
        console.log(id)
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
                axiosSecure.delete(`/delete/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.result.deletedCount > 0 || res.data.success.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                        }
                        setFoodStatusModal(false)
                    })
            }
        })

    }
    const handelEditMyFood = (selectFood) => {
        setOpenModal(true)
        setEditFood(selectFood)

    }
    const handelEditFood = (e, id) => {
        e.preventDefault();
        const form = e.target;
        const Food_Name = form.Food_Name.value;
        const Food_Image = form.Food_Image.value;
        const Food_Quantity = parseInt(form.Food_Quantity.value);
        const Pickup_Location = form.Pickup_Location.value;
        const Expired_Date = form.Expired_Date.value;
        const Additional_Notes = form.Additional_Notes.value;
        const editableFoodDetails = { Food_Name, Food_Image, Food_Quantity, Pickup_Location, Expired_Date, Additional_Notes }


        axiosSecure.put(`/food/${id}`, editableFoodDetails)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food Modify Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setOpenModal(false)
                }
            })
    }
    const handelFoodStatus = (id) => {
        // console.log(id)
        const bookedItem = bookings.filter(booking => booking.food_id === id)
        setBookedItems(bookedItem)

        setFoodStatusModal(true)
    }
    const handelApproveStatus = (id) => {
        // console.log(id)
        axiosSecure.patch(`/status/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.bookResult.modifiedCount > 0 || res.data.result.modifiedCount > 0) {
                    setFoodStatusModal(false)
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food Approve Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    return (
        <div className='min-h-[500px]'>
            <ManageMyFoodTable
                myFood={myFood}
                handelDelete={handelDelete}
                handelEditMyFood={handelEditMyFood}
                handelFoodStatus={handelFoodStatus}
            ></ManageMyFoodTable>
            <div>
                <EditMyFood
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    editFood={editFood}
                    handelEditFood={handelEditFood}
                    handelFoodStatus={handelFoodStatus}
                ></EditMyFood>
            </div>
            <div>
                <FoodStatus
                    foodStatusModal={foodStatusModal}
                    setFoodStatusModal={setFoodStatusModal}
                    bookedItems={bookedItems}
                    handelApproveStatus={handelApproveStatus}

                ></FoodStatus>
            </div>
        </div>
    );
};

export default ManageMyFood;