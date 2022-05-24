import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import useAdmin from "../Hook/useAdmin";
import Loading from "./Loading";




function RequireAdmin({ children }) {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)

    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        signOut(auth)
        localStorage.removeItem('accessToken');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAdmin;
