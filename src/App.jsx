import { RouterProvider } from "react-router-dom"
import router from "./routes/route"
import { ThemeProvider } from "@mui/material"
import { lightTheme } from "./theme/Theme"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div>
      <ThemeProvider theme={lightTheme}>

          <RouterProvider router={router}></RouterProvider>
        <ToastContainer/>

        {/* </ToastContainer> */}
      </ThemeProvider>

    </div>
  )
}

export default App
