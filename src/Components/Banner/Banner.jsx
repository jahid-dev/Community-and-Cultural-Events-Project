import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from 'react';
import { AuthContext } from '../../firebase/Provider/AuthProvider';
const Banner = () => {
  AOS.init();

  const {user} = useContext(AuthContext)
  return (
    <div 
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/sVXHFNv/photo-1501281668745-f7f57925c3b4-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg?fbclid=IwAR1x5WynTGXcnwaORxY2_a2G-Z9c8Ei1D1IOIj6t8Q-q7bf7I8xV63wxok0)",
      }}
    >
      <div  className="hero-overlay bg-opacity-60"></div>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">True Cultural Moments</h1>
          <p className="mb-5">
          Step into a snowy paradise at the Winter Wonderland Festival. Experience ice skating, magical light displays, and cozy fireside gatherings.
          </p>
          <button className="btn btn-primary">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
