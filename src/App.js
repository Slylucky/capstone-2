import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tours || tours.length === 0) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setTours(data);
          setLoading(false);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [loading]);

  const cancelTour = (id) => {
    let currentTours = tours.filter((tour) => tour.id !== id);
    setTours(currentTours);
  };

  return (
    <main>
      {tours && !loading ? (
        <div>
          {tours.length > 0 ? (
            <div>
              <h2 className="title">Our Tours</h2>
            </div>
          ) : (
            <div>
              <h2 className="title">No more Tours. Kindly refresh!</h2>
              <div className="refresher">
                <strong className="btn" onClick={() => setLoading(true)}>
                  Refresh
                </strong>
              </div>
            </div>
          )}

          <Tours tours={tours} cancel={cancelTour} />
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
}

export default App;
