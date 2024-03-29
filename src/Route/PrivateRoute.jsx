import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
     const {user, loading} = useContext(AuthContext);
     const location = useLocation()

     if(loading){
        return <div className='align-items-center text-center'> <Spinner animation="grow" variant="info" /></div>;
     }

     if(user){
        return children;
     }

    return <Navigate to = '/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;