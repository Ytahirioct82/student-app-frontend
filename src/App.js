import "./App.css";
import { useEffect, useState } from "react";
import StudentList from "./components/StudentList/StudentList";
import Loading from "./components/Loading/Loading";

const API_URL = "http://localhost:8888";
function App() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      //show the user that we're loading...
      setLoading(true);

      const res = await fetch(`${API_URL}/students`);
      const json = await res.json();

      setStudentData(json.data);
      //stop showing the user the loading UI...
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {/* if loading display Loading component else display StudentList component */}
      {loading ? <Loading /> : <StudentList studentData={studentData} />}
    </div>
  );
}

export default App;
