import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom"
import auth from "../Firebase/Firebase.init";


const ProtectRoute = () => {
    const Location = useLocation();
    const [user] = useAuthState(auth)
    if (!user) {
        return <Navigate to='/login' state={{ from: Location }} replace />
    }
    return <Outlet />
}


export default ProtectRoute;