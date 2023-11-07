
import useAuth from '../../Hook/useAuth';
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
import ManageMyFoodTable from './ManageMyFoodTable';
import Swal from 'sweetalert2';


const ManageMyFood = () => {
    const { user } = useAuth();

    const url = user ? `http://localhost:5000/food?email=${user.email}` : null;
    // console.log(url)
    const { data: myFood = [], isLoading } = useQuery({
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
                axios.delete(fetch(`http://localhost:5000/food/${id}`))
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


    return (
        <div className='min-h-[500px]'>
            <ManageMyFoodTable
                myFood={myFood}
                handelDelete={handelDelete}
            ></ManageMyFoodTable>
        </div>
    );
};

export default ManageMyFood;