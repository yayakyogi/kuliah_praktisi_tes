import { NavLink } from "react-router";

// eslint-disable-next-line react/prop-types
const Card = ({ id, title, description }) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700">{description}</p>
      <NavLink
        to={`/${id}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Read More
      </NavLink>
    </div>
  );
};

export default Card;
