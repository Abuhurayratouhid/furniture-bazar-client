import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import ShowError from '../../components/ShowError';
import Button from '@mui/material/Button';



// const products = [
//     {
//         id: 1,
//         title: 'New-1',
//         subTitle: 'It"s a best furniture',
//         pic: 'https://bazar.peacefulqode.com/wp-content/uploads/2021/08/pw.jpg'
//     },
//     {
//         id: 2,
//         title: 'New-2',
//         subTitle: 'It"s a best furniture',
//         pic: 'https://bazar.peacefulqode.com/wp-content/uploads/2021/08/23.jpg'
//     },
//     {
//         id: 3,
//         title: 'New-3',
//         subTitle: 'It"s a best furniture',
//         pic: 'https://bazar.peacefulqode.com/wp-content/uploads/2021/07/balcklamp.jpg'
//     },
//     {
//         id: 4,
//         title: 'New-4',
//         subTitle: 'It"s a best furniture',
//         pic: 'https://bazar.peacefulqode.com/wp-content/uploads/2021/07/desklamp.jpg'
//     },
// ]
const NewArrivals = () => {

    // data fetching with react query
    const { isLoading, error, data: products } = useQuery('newF', () =>
    fetch('http://localhost:5000/newFurniture').then(res =>
      res.json()
    )
  )

//   console.log(data)

  if(isLoading){
    return  <Loading/>
  }

  if(error){
    return <ShowError/>
  }
    return (
        <Container>
            <div style={{marginTop: '3rem'}}>
                <Typography variant='h3' align='center'>New Arrivals</Typography>
                <Typography align='center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatem.</Typography>
            </div>

            <div style={{
                width: '100%',
                // height: '70vh',
                // background: 'black',
                marginTop: '5rem'
            }}>
                <Grid container spacing={2}>

                    {
                        products.map(product => <Grid item xs={12} md={6} lg={3}
                            style={{
                                width: '300px',
                                height: '400px',
                                // background: '#faedcd',
                                borderRadius: '20px',
                                margin: 'auto'
                            }}
                            className="card"
                            key={product._id}>

                            <img style={{
                                width: '100%',
                                height: '70%'
                            }}
                                src={product.picture} alt="" />
                            <Typography variant='h5' align='center'>{product.title}</Typography>
                            <Typography align='center'>{product.subTitle.slice(0, 30)}...</Typography>
                            <div style={{
                                display: 'flex',
                                 justifyContent: 'space-between',
                                 alignItems: 'center',
                                 padding: '10px',
                                 
                                }}>

                            <Typography>{product.price}</Typography>
                            <Button
                            style={{ color: 'white', background: '#d4a373', padding: '10px', marginTop: '1rem', border: 'none' }}
                            >Buy Now</Button>
                            </div>

                        </Grid>)
                    }

                </Grid>



            </div>

        </Container>
    );
};

export default NewArrivals;