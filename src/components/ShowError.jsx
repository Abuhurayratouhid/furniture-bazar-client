import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const ShowError = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
            </Alert>

        </div>
    );
};

export default ShowError;