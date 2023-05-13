import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {userLogin} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')

    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setLoginError('')
            toast.success('Login successful')
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoginError(errorMessage)
            toast.error(errorMessage)
            console.log(errorCode, errorMessage)
          })

    }
    return (
        <div style={{ 
            marginTop: '4rem',
            display: 'grid',
            placeItems: 'center',
            width: '100%',
            height:'100%'
            
             }}>
            <h1>Login Please !</h1>
            <Box sx={{
                width: '300px',
                border: '1px solid #d4a373',
                padding: '1rem',
                borderRadius: '.5rem',
                margin: '1rem'
            }}>
                <form onSubmit={handleLogin}>
                    <Stack spacing={2}>
                        
                        <TextField name='email' type='email' id="outlined-basic1" label="Email" variant="outlined" required />
                        <br />
                        <TextField name='password' type='password' id="outlined-basic2" label="Password" variant="outlined" required />
                        {loginError ? <Typography align='center' color= 'red'> 
                        
                        {loginError}
                      </Typography> : ''}
                        <Typography align='center'>Are you new here?
                        <Link to='/signUp'>Sign Up</Link>
                        </Typography>
                        <Button variant="contained" type='submit'>Login</Button>

                    </Stack>
                </form>
                <Box sx={{
                    width: '100%',
                    mt: '1rem'
                }}>
                    {/* <Typography align='center'>Already have an account?</Typography> */}
                    <Typography align='center'>OR</Typography>
                    <Button style={{width: '100%', marginTop: '1rem'}} variant='contained'><GoogleIcon></GoogleIcon></Button>
                </Box>
            </Box>

        </div>
    );
};

export default Login;