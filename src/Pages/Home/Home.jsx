
import Banner from "../../Components/Banner/Banner";
import NewService1 from "../../Components/NewService1/NewService1";
import NewService2 from "../../Components/NewService2/NewService2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TotalCards from "../../Components/TotalCards/TotalCards";
import Survey from "../../Components/Survey/Survey";

const Home = () => {
    AOS.init();
   
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-5xl text-center mt-10 font-semibold font-serif">Our Services</h2>
            <TotalCards></TotalCards>
            <NewService1></NewService1>
            <NewService2></NewService2>
            <Survey></Survey>
            
        </div>
    );
};


export default Home