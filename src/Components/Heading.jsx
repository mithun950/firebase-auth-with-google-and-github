import { NavLink } from "react-router-dom";


const Heading = () => {
    return (
        <div>
             <NavLink className={"mr-4"} to="/">Home</NavLink>
             <NavLink className={'mt-10'} to="/login">Login</NavLink>
             </div>
    );
};

export default Heading;