import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router";
import Loading from "./components/loading";

const Detail = () => {
  const [data, setData] = useState();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/posts/${params?.id}`
    );

    if (res.status === 200) {
      setData(res.data);
    } else {
      console.log("error ", res.statusText);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl">Detail Page</h1>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="mt-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {data?.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{data?.body}</p>
          <NavLink
            to="/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Back
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Detail;
