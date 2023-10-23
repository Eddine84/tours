const url = "https://course-api.com/react-tours-project";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const deleteItem = (id) => {
    const newTours = data.filter((card) => card.id !== id);
    setData(newTours);
  };
  const getTour = async () => {
    try {
      const response = await fetch(url);
      const informations = await response.json();
      setData(informations);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTour();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h1>no tours left</h1>
          <button
            className="btn"
            type="button"
            onClick={getTour}
            style={{ marginTop: "2rem" }}
          >
            refrech
          </button>
        </div>
      </main>
    );
  }
  return <Tours data={data} deleteItem={deleteItem} />;
};
export default App;
