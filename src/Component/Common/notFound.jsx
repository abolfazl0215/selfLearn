import React from 'react';
import { Helmet } from 'react-helmet';

const notFound = () => {
    return ( 
        <div>
            <Helmet>
                <title>404</title>
            </Helmet>
            <h1 className="text-center mt-4">
                همچین صفحه ای وجود ندارد
            </h1>
        </div>
     );
}
 
export default notFound;