import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const item = useLoaderData()
    console.log(item)
    return (
        <div>
            poist
        </div>
    );
};

export default ItemDetails;