import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "./components/card";
import Loading from "./components/loading";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts`);

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
      <h1 className="text-2xl">List Article</h1>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="grid grid-cols-12 gap-5 mt-5">
          {data.map((val, index) => {
            return (
              <div key={index} className="col-span-3">
                <Card id={val.id} title={val.title} description={val.body} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
