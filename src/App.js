import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import './Styles/appStyle.css';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <div className="appStyle">
            <RouterProvider router={routes}></RouterProvider>
            {/* <Toaster position="bottom-center" reverseOrder={false} /> */}
        </div>
    );
}

export default App;
