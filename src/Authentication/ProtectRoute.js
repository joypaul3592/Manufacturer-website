import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom"


const ProtectRoute = () => {
    const Location = useLocation();
    const user = true;
    if (!user) {
        return <Navigate to='/login' state={{ from: Location }} replace />
    }
    return <Outlet />
}


export default ProtectRoute;