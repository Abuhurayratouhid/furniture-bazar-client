// import React from 'react';

import { Box, Grid, Typography } from "@mui/material";
// import Container from '@mui/material/Container';

const team = [
    {
        id: 1,
        pic: 'https://cdn.pixabay.com/photo/2017/02/20/11/57/boy-2082270__340.jpg'
    },
    {
        id: 2,
        pic: 'https://cdn.pixabay.com/photo/2016/03/26/14/43/young-1280694__340.jpg'
    },
    {
        id: 3,
        pic: 'https://cdn.pixabay.com/photo/2015/08/14/15/28/smiling-888532__340.jpg'
    },
    {
        id: 4,
        pic: 'https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911329__340.jpg'
    },

]

const About = () => {
    return (
        <div style={{ marginTop: '4rem' }}>
            <Box sx={{
                width: '100%',
                height: '35vh',
                background: '#faedcd',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box>
                    <Typography variant='h2'>About Us</Typography>
                    <Typography variant='h5'>Our Motivated Team</Typography>
                </Box>


            </Box>



            {/* our team  */}
            <Box>
                <Grid container spacing={2}>

                    {
                        team.map(member => <Grid item xs={12} md={6} lg={3}
                            style={{
                                width: '300px',
                                height: '400px',
                                // background: '#faedcd',
                                borderRadius: '20px',
                                margin: 'auto'
                            }}
                            className="card hover"
                            key={member.id}>

                            <img style={{
                                width: '100%',
                                height: '100%'
                            }}
                                src={member.pic} alt="team member" />


                        </Grid>)
                    }

                </Grid>

            </Box>
        </div>
    );
};

export default About;