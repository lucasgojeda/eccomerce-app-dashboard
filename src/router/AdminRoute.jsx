import { Navigate } from "react-router-dom";
import {
    useLocation,
} from "react-router-dom";

export const AdminRoute = ({ children, isRole }) => {

    const { pathname } = useLocation();


    switch (isRole) {
        case 'ADMIN_ROLE':
            return children;

        case 'MODERATOR_ROLE':
            switch (pathname) {
                case '/users':
                    return <Navigate to="/" />;

                case '/bin/users':
                    return <Navigate to="/" />;

                case '/bin/products':
                    return <Navigate to="/" />;

                case '/regist':
                    return <Navigate to="/" />;

                default:
                    return children;
            }

        default:
            return <Navigate to="/login" />;
    }



};