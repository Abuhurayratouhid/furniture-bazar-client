import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const [authError, setAuthError] = useState('')

    const { userCreate } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        userCreate(email, password)
            .then((userInfo) => {
                const user = userInfo.user;
                setAuthError('')
                toast.success('successfully login completed')
                console.log(user)
            }).catch((error) =>  {
               
            //  const   errorCode= error.code;
             const  errorMessage= error.message;
             setAuthError(errorMessage)
             toast.error(errorMessage) 
                
            console.log(errorMessage)
            })

        console.log(form, name, email, password)
        
    }
    return (
        <div style={{
            marginTop: '4rem',
            display: 'grid',
            placeItems: 'center',
            width: '100%',
            height: '100%'

        }}>
            <h1>Sign up</h1>
            <Box sx={{
                width: '300px',
                border: '1px solid #d4a373',
                padding: '1rem',
                borderRadius: '.5rem',
                margin: '1rem'
            }}>
                <form onSubmit={handleSignUp}>
                    <Stack spacing={2}>
                        <TextField name='name' id="outlined-basic1" label="Name" variant="outlined" required />
                        <br />
                        <TextField name='email' type='email' id="outlined-basic2" label="Email" variant="outlined" required />
                        <br />
                        <TextField name='password' type='password' id="outlined-basic3" label="Password" variant="outlined" required />
                        {authError ? <Typography align='center' color= 'red'> 
                        
                        {authError}
                      </Typography> : ''}
                        
                        <Typography align='center'>Already have an account?
                            <Link to='/login'>Login</Link>
                        </Typography>
                        <Button type='submit' variant="contained">Sign Up </Button>

                    </Stack>
                </form>
                <Box sx={{
                    width: '100%',
                    mt: '1rem'
                }}>
                    {/* <Typography align='center'>Already have an account?</Typography> */}
                    <Typography align='center'>OR</Typography>
                    <Button style={{ width: '100%', marginTop: '1rem' }} variant='contained'><GoogleIcon></GoogleIcon></Button>
                </Box>
            </Box>

        </div>
    );
};

export default SignUp;