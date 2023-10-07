import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';

import AOS from 'aos';
import 'aos/dist/aos.css';
const CardDetails = () => {
    AOS.init();
    const data = useLoaderData()
    const {id} = useParams()
    const dataFinding = data.find( dataFinding => dataFinding.id == id)
    console.log(dataFinding);
    const { name, image, price, details } = dataFinding

    const handleBtn = () =>{
        swal({
            title: "THANK YOU",
            text: "Stay With Us",
            icon: "success",
          });
    }
    return (
        <div data-Aos="fade-up" className="max-w-7xl mx-auto">
            <img src={image} alt="" />
            <p className="text-4xl mt-5 font-bold font-mono">{name}</p>
            <p className="text-3xl font-semibold mt-2">{details}</p>
            <p className="text-3xl mt-2 font-semibold font-mono">Price Range: {price}</p>
            <button onClick={() => handleBtn()} className="btn mb-10 text-2xl btn-secondary">Purchase</button>
        </div>
    );
};

export default CardDetails;