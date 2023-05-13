import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const MoreProducts = () => {
    return (
        <Container>
            <div style={{
                width: '100%',
                // height: '100vh',
                // background: 'black',
                // margin: '2rem'

            }}>
                <div style={{marginTop: '4rem', marginBottom: '3rem'}}>
                    <Typography variant='h3' align='center'>Best Products</Typography>
                    <Typography align='center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatem.</Typography>
                </div>


                {/* layout  */}
                <Grid container>
                    <Grid className='hover' item xs={12} md={8} lg={8}
                        style={{
                            // background: 'white',
                            height: '500px',
                            padding: '15px',
                            margin: 'auto'
                        }}
                    >
                        <img style={{ width: '100%', height: '100%' }} src="https://bazar.peacefulqode.com/wp-content/uploads/2021/10/1.png" alt="" />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}
                        style={{
                            // background: 'red',
                            padding: '15px'
                        }}
                    >
                        <img style={{ width: '100%', height: '100%' }} src="https://bazar.peacefulqode.com/wp-content/uploads/2021/10/2-2.jpg" alt="" />
                    </Grid>


                </Grid>
                {/* layout-2  */}
                <Grid container>
                    <Grid item xs={12} md={4} lg={4}
                        style={{
                            padding: '15px',
                            height: '500px'
                            // marginRight: '15px' 
                        }}
                    >
                        <img style={{ width: '100%', height: '100%' }} src="https://bazar.peacefulqode.com/wp-content/uploads/2021/10/2-3.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}
                        style={{
                            padding: '15px',
                            height: '500px'
                        }}
                    >
                        <img style={{ width: '100%', height: '100%' }} src="https://bazar.peacefulqode.com/wp-content/uploads/2021/08/ws-600x713.jpg" alt="" />
                    </Grid>


                </Grid>
            </div>
        </Container>
    );
};

export default MoreProducts;