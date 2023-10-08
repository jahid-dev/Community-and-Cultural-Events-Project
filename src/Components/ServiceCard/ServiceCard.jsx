import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ singleData }) => {
  console.log(singleData);
  const { id, name, image, description } = singleData;
  return (
    <Link to={`/card/${id}`}>
      <div data-aos="fade-down">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-lg w-96 h-72" src={image} alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              {name}
            </h5>
            <p className="mb-3 font-normal text-black">{description}</p>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center btn-accent text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              View Details
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

ServiceCard.propTypes = {
  singleData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;
