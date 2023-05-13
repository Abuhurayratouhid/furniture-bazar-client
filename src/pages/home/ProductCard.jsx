// import React from 'react';

import { Grid, } from "@mui/material";

const ProductCard = () => {
    // const {picture, price, subTitle, title} = product;
    // console.log(picture, price, subTitle, title)
    return (
        <Grid container>
            {/* <Grid item xs={12} md={6} lg={3}
                            style={{
                                width: '300px',
                                height: '400px',
                                // background: '#faedcd',
                                borderRadius: '20px',
                                margin: 'auto'
                            }}
                            className="card hover"
                            >

                            <img style={{
                                width: '100%',
                                height: '70%'
                            }}
                                src={picture} alt="furniture" />
                            <Typography variant='h5' align='center'>{title}</Typography>
                            <Typography align='center'>{subTitle.slice(0, 30)}...</Typography>
                            <div style={{
                                display: 'flex',
                                 justifyContent: 'space-between',
                                 alignItems: 'center',
                                 padding: '10px',
                                 
                                }}>

                            <Typography>Price: {price}</Typography>
                            <Button
                            style={{ color: 'white', background: '#d4a373', padding: '10px', marginTop: '1rem', border: 'none' }}
                            >Buy Now</Button>
                            </div>

                        </Grid> */}
        </Grid>
    );
};

export default ProductCard;