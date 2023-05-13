import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const Loading = () => {
    return (
        <>
            <Box sx={{
                width: '100%',
                height:'100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center'
            }}>
                <Box sx={{ width: '50%' }}>
                <LinearProgress />
                </Box>
            </Box>
        </>
    );
};

export default Loading;