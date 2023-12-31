
import React, { useEffect, useMemo, useState } from 'react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { FaTrash } from "react-icons/fa";

const ManageMyFoodTable = ({ myFood, handelDelete, handelEditMyFood, handelFoodStatus }) => {

    const data = useMemo(() => myFood, [myFood])


    // console.log(data)

    const columns = [

        {
            accessorKey: '',
            cell: (info) => <span>{info.row.index + 1}</span>,
            header: 'S.No',
        },
        {
            accessorKey: 'Food_Name',
            header: 'Food Name',
        },
        {
            accessorKey: 'Food_Quantity',
            header: 'Food Quantity',
        },
        {
            accessorKey: 'Pickup_Location',
            header: 'Pickup Location',
        },
        {
            accessorKey: 'Expired_Date',
            header: 'Expired Date',
        },
        {
            accessorKey: 'Additional_Notes',
            header: 'Additional Notes',
        },
        {
            accessorKey: 'Food_Status',
            cell: ({ cell }) => {
                const status = cell.row.original.Food_Status === "Not_Available";
                return status ? (<button className='text-orange-500' disabled>Approved</button>) :
                    (<button className='text-blue-500' onClick={() => handelFoodStatus(cell.row.original._id)}>Status</button>)
            },
            header: 'Manage',

        },
        {
            accessorKey: '',
            cell: ({ cell }) => {
                const status = cell.row.original.Food_Status === "Not_Available";
                return status ? (<button className='text-green-500' disabled>Edit</button>) : (<button className='text-green-500' onClick={() => handelEditMyFood(cell.row.original)}>Edit</button>)
            },


            header: 'Edit',

        },
        {
            accessorKey: '',
            cell: ({ cell }) => (
                <button className='text-red-500' onClick={() => handelDelete(cell.row.original._id)}><FaTrash></FaTrash></button>
            ),
            header: 'Delete',

        }


    ]

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div>
            {
                data?.length > 0 ?
                    <>
                        <h2 className='text-5xl text-center my-12'>Manage my food</h2>

                        <div className='p-2 max-w-5xl mx-auto text-white fill-gray-400 overflow-x-scroll'>


                            <table className='bg-indigo-600 rounded-xl'>
                                <thead>
                                    {table.getHeaderGroups().map(headerGroup => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup.headers.map(header => (
                                                <th className='uppercase px-3 py-2' key={header.id}>
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                </th>
                                            ))}

                                        </tr>
                                    ))}
                                </thead>

                                <tbody>
                                    {table.getRowModel().rows.map((row, i) => (

                                        <tr key={row.id}
                                            className={`
                        ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                        `}
                                        >
                                            {row.getVisibleCells().map(cell => (
                                                <td className='px-3 py-2' key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            )

                                            )}

                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </>
                    : <div className='flex justify-center items-center h-[300px]'>
                        <p className='text-3xl font-bold'> "No food items have been added yet. Please consider adding some food items."</p>
                    </div>

            }
        </div>
    );
};

export default ManageMyFoodTable;
{/*  */ }