import { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";


const TotalCards = () => {
    const [cards, setCards] = useState([])
    fetch("/data.json")
    .then( data => data.json())
    .then(data => setCards(data))
    // console.log(cards);
    return (
        <div className=" flex my-10 justify-center ">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {
                cards?.map(singleData => <ServiceCard
                    key={singleData.id}  singleData={singleData}></ServiceCard>)
            }
            </div>
            
        </div>
    );
};

export default TotalCards;