import { Navigate, useLocation } from "react-router";
import useAdmin from "../Hooks/useAdmin";
import PropTypes from 'prop-types'
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";


const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;
AdminRoutes.propTypes = {
    children: PropTypes.node
}