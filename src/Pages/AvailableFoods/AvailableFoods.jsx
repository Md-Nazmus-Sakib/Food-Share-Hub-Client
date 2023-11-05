import React from 'react';

import AvailableFoodsHeader from './AvailableFoodsHeader';
import AllFood from './AllFood';
import { useLoaderData } from 'react-router-dom';
const AvailableFoods = () => {
    const allFood = useLoaderData();
    return (
        <div>
            <AvailableFoodsHeader></AvailableFoodsHeader>
            <AllFood allFood={allFood}></AllFood>
        </div>
    );
};

export default AvailableFoods;