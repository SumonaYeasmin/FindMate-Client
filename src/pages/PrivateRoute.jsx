import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    // console.log(user);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <h1 className='text-center'>Loading</h1>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/user-login'}></Navigate>
};

export default PrivateRoute;