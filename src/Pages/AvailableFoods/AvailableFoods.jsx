import React, { useEffect, useRef, useState } from 'react';

import AvailableFoodsHeader from './AvailableFoodsHeader';
import AllFood from './AllFood';
import axios from 'axios';
import { Helmet } from 'react-helmet';
const AvailableFoods = () => {
    // const allFood = useLoaderData();
    const searchInputRef = useRef(null);
    const [allFood, setAllFood] = useState([]);
    const handelSearch = (e) => {
        e.preventDefault();
        const searchTerm = (searchInputRef.current.value).toLowerCase();
        // console.log(searchTerm)
        axios.get(`https://food-share-hub-server.vercel.app/food?search=${searchTerm}`)
            .then(res => {
                setAllFood(res.data)
            })

    }

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://food-share-hub-server.vercel.app/food');
                setAllFood(response.data);
            } catch (error) {
                console.log(error);
            }
        })
            ();
    }, [])

    return (
        <div>
            <div>
                <Helmet>
                    <title>Food Share Hub | Available Food</title>
                </Helmet>
            </div>
            <AvailableFoodsHeader handelSearch={handelSearch} searchInputRef={searchInputRef} ></AvailableFoodsHeader>
            <AllFood allFood={allFood}></AllFood>
        </div>
    );
};

export default AvailableFoods;