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
                case '/dashboard/bin/users':
                    return <Navigate to="/login" />;

                case '/dashboard/bin/products':
                    return <Navigate to="/login" />;

                case '/dashboard/regist':
                    return <Navigate to="/login" />;

                default:
                    return children;
            }

        default:
            return <Navigate to="/login" />;
    }



};