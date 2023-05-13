import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';





const Banner = () => {
    return (
        
            <div style={{ marginTop: '4rem', maxWidth: '1280px', margin: 'auto', height: { lg: '100vh' } }}>
                <Grid container>
                    <Grid item xs={12} md={6} lg={6} style={{ paddingTop: '4.5rem', paddingLeft: '1rem' }}>

                        <Typography variant='h1'>Best online <span style={{ color: '#d4a373' }}>furniture</span> shopping</Typography>
                        <Typography style={{ paddingTop: '1rem' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt placeat dolorem, ipsam tempora maiores facere numquam est dicta inventore, neque eius, ullam officiis eaque? Ullam voluptates repellendus voluptas recusandae aliquam?</Typography>
                        <Button style={{ color: 'white', background: '#d4a373', padding: '20px', marginTop: '1rem', border: 'none' }}>Explore More</Button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} style={{ padding: '2rem' }}>
                        <img style={{ width: '100%' }} src="https://bazar.peacefulqode.com/wp-content/uploads/revslider/slider-1/111.png" alt="" />
                    </Grid>

                </Grid>
            </div>
        
    );
};

export default Banner;