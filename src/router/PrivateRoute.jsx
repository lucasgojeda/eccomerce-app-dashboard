import { Navigate } from "react-router-dom";


export const PrivateRoute = ({children, isAutenticated}) => {

    return isAutenticated ? children : <Navigate to="/login" />
};