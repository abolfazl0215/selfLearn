import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SelfLearn from './SelfLearn'
import { ToastContainer } from 'react-toastify';
import { LoadingBar } from 'react-redux-loading-bar';


const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <SelfLearn/>
                <ToastContainer/>
                <LoadingBar style={{ backgroundColor: "lime", height: "500px" }}/>
            </BrowserRouter>
        </div>
     );
}
 
export default App;