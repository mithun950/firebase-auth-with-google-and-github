
import { Outlet } from "react-router-dom";
import Heading from "../Heading";
const MainLayout = () => {
    return (
        <div>
            <Heading></Heading>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;