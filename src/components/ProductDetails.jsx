// import React from 'react';

import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div style={{marginTop:'4rem'}}>
            <h1>Product details</h1>
        </div>
    );
};

export default ProductDetails;