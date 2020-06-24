import React from 'react';
import {Loader} from "../components/Commons/Loader/Loader";


const withLazyLoader = (Component) => {
    return (props)=>{
        return (
            <React.Suspense fallback={<Loader />}>
                <div>
                    <Component {...props}/>
                </div>
            </React.Suspense>
        )
    }


};
export default withLazyLoader