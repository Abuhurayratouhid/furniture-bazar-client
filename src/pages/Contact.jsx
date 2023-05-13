import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MapIcon from '@mui/icons-material/Map';
import MessageIcon from '@mui/icons-material/Message';
import HeadphonesIcon from '@mui/icons-material/Headphones';


const Contact = () => {
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
                <Typography variant='h2'>Contact Us</Typography>

            </Box>

            {/* contact method */}

            <Grid container >
                {/* location  */}
                <Grid item xs={12} md={4} lg={4}
                    sx={{
                        // background: 'orange',
                        height: '500px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>

                    <Box sx={{
                        width: 300,
                        height: 300,
                        background: '#faedcd',
                        textAlign: 'center',
                        padding:'1rem'
                    }}>
                        <MapIcon color='primary' style={{margin:'2rem', fontSize:'100px'}}/>
                        {/* <MessageIcon/> */}
                        {/* <HeadphonesIcon/> */}
                        <Typography variant='h4'>Location</Typography>
                        <Typography>The Queens Walk, Bishops,
                            London SE1 7PB, United Kingdom</Typography>

                    </Box>
                </Grid>

                {/* message  */}
                <Grid item xs={12} md={4} lg={4}
                    sx={{
                        // background: 'orange',
                        height: '500px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>

                    <Box sx={{
                        width: 300,
                        height: 300,
                        background: '#faedcd',
                        textAlign: 'center',
                        padding:'1rem'
                    }}>
                        {/* <MapIcon color='primary' style={{margin:'2rem', fontSize:'100px'}}/> */}
                        <MessageIcon color='primary' style={{margin:'2rem', fontSize:'100px'}}/>
                        {/* <HeadphonesIcon/> */}
                        <Typography variant='h4'>Massage Us</Typography>
                        <Typography>message@gmail.com <br /> chat@gmail.com</Typography>

                    </Box>
                </Grid>

                {/* phone */}
                <Grid item xs={12} md={4} lg={4}
                    sx={{
                        // background: 'orange',
                        height: '500px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>

                    <Box sx={{
                        width: 300,
                        height: 300,
                        background: '#faedcd',
                        textAlign: 'center',
                        padding:'1rem'
                    }}>
                        {/* <MapIcon color='primary' style={{margin:'2rem', fontSize:'100px'}}/> */}
                        {/* <MessageIcon/> */}
                        <HeadphonesIcon color='primary' style={{margin:'2rem', fontSize:'100px'}}/>
                        <Typography variant='h4'>Call Us</Typography>
                        <Typography>+880 459485024 <br /> +880 874895298</Typography>

                    </Box>
                </Grid>
                

            </Grid>
        </div>
    );
};

export default Contact;