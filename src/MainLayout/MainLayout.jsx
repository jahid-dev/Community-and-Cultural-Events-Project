import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="min-h-screen  mx-auto">
            <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;