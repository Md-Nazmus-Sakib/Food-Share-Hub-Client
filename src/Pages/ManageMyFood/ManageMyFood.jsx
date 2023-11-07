
import useAuth from '../../Hook/useAuth';
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
import ManageMyFoodTable from './ManageMyFoodTable';
import Swal from 'sweetalert2';
import EditMyFood from '../../Component/EditMyFood/EditMyFood';
import { useState } from 'react';
import FoodStatus from './FoodStatus/FoodStatus';


const ManageMyFood = () => {
    const { user } = useAuth();
    const [openModal, setOpenModal] = useState(false);
    const [foodStatusModal, setFoodStatusModal] = useState(false);
    const [editFood, setEditFood] = useState({});
    const url = user ? `http://localhost:5000/food?email=${user.email}` : null;
    // console.log(url)
    const { data: myFood = [], isLoading, refetch } = useQuery({
        queryKey: ['myFood'],
        queryFn: async () => {
            const res = await axios.get(url);

            return res.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
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
                axios.delete(`http://localhost:5000/food/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                        }
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


        axios.put(`http://localhost:5000/food/${id}`, editableFoodDetails)
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
        setFoodStatusModal(true)
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
                ></FoodStatus>
            </div>
        </div>
    );
};

export default ManageMyFood;