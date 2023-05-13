import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Loading from '../../components/Loading';
import ShowError from '../../components/ShowError';
import { useQuery } from 'react-query';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';
// import ProductCard from './ProductCard';


// const products = [
//     {
//         id: 1,
//         title: 'Product-1',
//         subTitle: 'It"s a best furniture',
//         pic: 'https://bazar.peacefulqode.com/wp-content/uploads/2021/08/6-600x713.jpg'
//     },
//     {
//         id: 2,
//         title: 'Product-2',
//         subTitle: 'It"s a best furniture',
//         pic: 'https://bazar.peacefulqode.com/wp-content/uploads/2021/08/251.jpg'
//     },
//     {
//         id: 3,
//         title: 'Product-3',
//         subTitle: 'It"s a best furniture',
//         pic: 'https://bazar.peacefulqode.com/wp-content/uploads/2021/08/chaks.jpg'
//     },
//     {
//         id: 4,
//         title: 'Product-4',
//         subTitle: 'It"s a best furniture',
//         pic: 'https://bazar.peacefulqode.com/wp-content/uploads/2021/08/bw.jpg'
//     },
// ]

const FeatureProducts = () => {
    // data fetching with react query
    const { isLoading, error, data: products } = useQuery('fProduct', () =>
    fetch('http://localhost:5000/furniture').then(res =>
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
            <div>
                <Typography variant='h3' align='center'>Feature Product</Typography>
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
                            className="card hover"
                            key={product._id}>

                            <img style={{
                                width: '100%',
                                height: '70%'
                            }}
                                src={product.picture} alt="furniture" />
                            <Typography variant='h5' align='center'>{product.title}</Typography>
                            <Typography align='center'>{product.subTitle.slice(0,30)}...</Typography>
                            <div style={{
                                display: 'flex',
                                 justifyContent: 'space-between',
                                 alignItems: 'center',
                                 padding: '10px',
                                 
                                }}>

                            <Typography>{product.price}</Typography>
                            <Link to={`/product/${product._id}`}>
                            <Button
                            style={{ color: 'white', background: '#d4a373', padding: '10px', marginTop: '1rem', border: 'none' }}
                            >Buy Now</Button></Link>
                            </div>

                        </Grid>)
                    }
                    

                </Grid>

                    <Box>
                        <Modal/>
                    </Box>

            </div>

        </Container>
    );
};

export default FeatureProducts;
