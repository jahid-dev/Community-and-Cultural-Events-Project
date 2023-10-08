import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import NewService1 from "../../Components/NewService1/NewService1";
import NewService2 from "../../Components/NewService2/NewService2";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    AOS.init();
    const allData = useLoaderData()
    console.log(allData);
    const { id, name, image, price, description, details } = allData;
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-5xl text-center mt-10 font-semibold font-serif">Our Services</h2>
            <div data-aos="fade-up" className="grid max-w-full overflow-x-auto mx-auto lg:grid-cols-3 mt-10 justify-center gap-10 ">
                {
                    allData?.map(singleData => <ServiceCard
                      key={singleData.id}  singleData={singleData}></ServiceCard>)
                }
            </div>
            <div className="my-10 max-w-[1400px] mx-auto text-center">
                <div data-aos="fade-up-right">
                <NewService1></NewService1>
                </div>
                <div data-aos="fade-up-left">
                <NewService2></NewService2>
                </div>
            </div>
        </div>
    );
};


export default Home