import { Navigate, useLocation } from "react-router";
import PropTypes from 'prop-types'
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const VolunteerRoutes = ({children}) => {
    const { userData, loading } = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (userData?.role === "volunteer" || userData?.role === "admin" ) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default VolunteerRoutes;
VolunteerRoutes.propTypes = {
    children: PropTypes.node
}