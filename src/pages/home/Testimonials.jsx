import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import Container from '@mui/material/Container';

const Testimonials = () => {
    return (
        <Container>
            <div style={{marginTop: '4rem', marginBottom: '4rem'}}>
                <Typography variant='h3' align='center'>Our Testimonials</Typography>
                <Typography align='center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatem.</Typography>
            </div>

            {/* Testimonials card  */}
            <Grid container>
                <Grid item xs={12} md={6} lg={6}
                style={{
                    // background:'blue',
                    padding: '2rem'
                }}
                >
                   <Typography style={{marginBottom:'1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempora iusto? Iure iste cupiditate expedita. Inventore architecto officia iure eaque eligendi amet, saepe doloribus quidem, odit dolore eum illo distinctio.</Typography>
                   <StarIcon></StarIcon>
                   <StarIcon></StarIcon>
                   <StarIcon></StarIcon>
                   <StarIcon></StarIcon>
                   <StarIcon></StarIcon>

                   <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginTop: '2rem'}}>
                    <img src="https://bazar.peacefulqode.com/wp-content/uploads/2021/10/5.jpg" alt="" />
                    <div>
                        <Typography>Abu Hurayra</Typography>
                        <Typography>CEO & Founder</Typography>
                    </div>
                   </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6}
                style={{
                    // background:'blue',
                    padding: '2rem'
                }}
                >
                   <Typography style={{marginBottom:'1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempora iusto? Iure iste cupiditate expedita. Inventore architecto officia iure eaque eligendi amet, saepe doloribus quidem, odit dolore eum illo distinctio.</Typography>
                   <StarIcon></StarIcon>
                   <StarIcon></StarIcon>
                   <StarIcon></StarIcon>
                   <StarIcon></StarIcon>
                   <StarIcon></StarIcon>

                   <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginTop: '2rem'}}>
                    <img src="https://bazar.peacefulqode.com/wp-content/uploads/2021/10/3.jpg" alt="" />
                    <div>
                        <Typography>Fatima</Typography>
                        <Typography>CEO & Founder</Typography>
                    </div>
                   </div>
                </Grid>
                

            </Grid>
            
        </Container>
    );
};

export default Testimonials;