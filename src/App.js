import "./App.css";
import { useEffect, useState } from "react";
import StudentList from "./components/StudentList/StudentList";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";

const API_URL = "http://localhost:8888";
function App() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const render = (loading, error) => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <StudentList studentData={studentData} />;
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        //show the user that we're loading...
        setLoading(true);

        const res = await fetch(`${API_URL}/students`);
        const json = await res.json();
        const { data, error } = json;

        if (res.ok) {
          // handle success.
          setStudentData(data);
          //stop showing the user the loading UI...
          setLoading(false);
        } else {
          // handle error.
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {/* if loading display Loading component else if error diplay error else display StudentList component */}
      {render(loading, error)}
    </div>
  );
}

export default App;
