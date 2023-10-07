import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (

    <div  className="flex mr-2  items-center mb-7 ml-2 mt-5 flex-col text-center lg:flex-row  lg:justify-between">
        <div className="text-5xl font-serif font-semibold"> Vibrance</div>
        <div className="text-xl space-x-5">
            <NavLink to='/' className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "border-4  border-blue-600" : ""
           }>Home</NavLink>
            <NavLink to='/login' 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-4 border-blue-600" : ""
          }
            >Login</NavLink>
            <NavLink to='register'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-4 border-blue-600" : ""
          }
            
            >Register</NavLink>
            <NavLink to='/about'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-4  border-blue-600" : ""
          }
            >About</NavLink>
        </div>
        <div>
            <Link to='/login'> 
            <button className="btn text-2xl btn-ghost">Sign in</button>
            </Link>
        </div>
    </div>

    );
};

export default Navbar;