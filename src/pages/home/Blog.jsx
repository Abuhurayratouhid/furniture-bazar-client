import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import ShowError from '../../components/ShowError';

// import Container from '@mui/material/Container';

// const blogs = [
//     {
//         id: 1,
//         title: 'Blog-1',
//         subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt enim nobis nemo illum fugiat voluptas, sed vero alias facere ipsum quidem quo, id eligendi modi officia nam. Quod, quas voluptatem!',
//         pic: 'https://bazar.peacefulqode.com/wp-content/uploads/2021/09/12.jpg'
//     },
//     {
//         id: 2,
//         title: 'Blog-2',
//         subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt enim nobis nemo illum fugiat voluptas, sed vero alias facere ipsum quidem quo, id eligendi modi officia nam. Quod, quas voluptatem!',
//         pic: 'https://bazar.peacefulqode.com/wp-content/uploads/2021/09/14.jpg'
//     },
//     {
//         id: 3,
//         title: 'Blog-3',
//         subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt enim nobis nemo illum fugiat voluptas, sed vero alias facere ipsum quidem quo, id eligendi modi officia nam. Quod, quas voluptatem!',
//         pic: 'https://bazar.peacefulqode.com/wp-content/uploads/2021/09/8.jpg'
//     }
    
// ]

const Blog = () => {
    const date = new Date().getDate()

    // data fetching with react query
    const { isLoading, error, data } = useQuery('fBlog', () =>
    fetch('http://localhost:5000/furnitureBlog').then(res =>
      res.json()
    )
  )

  if(isLoading){
    return  <Loading/>
  }

  if(error){
    return <ShowError/>
  }

  
    return (
        <div>
            <div style={{marginTop: '4rem', marginBottom: '4rem'}}>
                <Typography variant='h3' align='center'>Our Latest Blog</Typography>
                <Typography align='center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatem.</Typography>
            </div>

            <Grid container>
                {
                    data.map(blog=> <Grid item xs={12} md={4} lg={4} 
                        key={blog._id}
                        style={{
                            width:'400px',
                            height: '500px',
                            // background: 'blue',
                            padding: '20px',
                            position: 'relative'
                        }}
                        >
                            <img style={{width: '100%', height: '60%'}} src={blog.picture} alt="" />
                            <Typography variant='h5' color= 'primary'>{blog.title}</Typography>
                            <Typography style={{marginTop: '.5rem', marginBottom: '.5rem'}}>{blog.subTitle.slice(0,200)}...</Typography>
                            <Typography color='primary'>Read more...</Typography>
                            <div style={{
                                width:'100px',
                                height:'50px',
                                background: '#d4a373',
                                position: 'absolute',
                                right: '30px',
                                top: '40px',
                                display: 'grid',
                                placeItems: 'center'
                            }}
                            >
                                <Typography variant='h6' color= 'white'>Date:{date}</Typography>
                            </div>
                        </Grid>)
                }

            </Grid>


            {/* blog card  */}
            
            
        </div>
    );
};

export default Blog;