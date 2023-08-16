import { useState } from "react";
import StudentCard from "../StudentCard/StudentCard";
import "./StudentList.css";

const StudentList = ({ studentData }) => {
  // when I type the input, I should see student by name
  const [searchInput, setSearchInput] = useState("");
  const [expanded, setExpanded] = useState([]);

  const handleExpandAll = () => setExpanded(dataToDisplay.map((student) => student.id));
  const handleCollapseAll = () => setExpanded([]);

  // handles the user input and sets the value to the searchInput state.
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleToggleExpanded = (id) => {
    expanded.includes(id)
      ? setExpanded(expanded.filter((studentId) => studentId !== id))
      : setExpanded([...expanded, id]);
  };

  // bode of function - filter data here
  // create a var to hold the filtered data
  let dataToDisplay = studentData;

  // if searchInput is truthy
  // reassign dataToDisplay with filtered data
  if (searchInput) {
    dataToDisplay = studentData.filter((student) => {
      const name = searchInput.toLowerCase();
      const { firstName, lastName } = student;
      const fullName = `${firstName} ${lastName}`.toLowerCase();

      return fullName.includes(name);
    });
  }

  const renderContent = () => {
    // if dataToDisplay === 0 display 'No students found' message else display list of students.
    let contentClassName = "StudentList__content";
    if (dataToDisplay.length) {
      return (
        <div className={contentClassName}>
          {dataToDisplay.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              expanded={expanded.includes(student.id)}
              onClick={() => handleToggleExpanded(student.id)}
            />
          ))}
          ;
        </div>
      );
    } else {
      contentClassName += " StudentList__content--center";
      return <div className={contentClassName}>{`No Students Found By That Name ${searchInput}`}</div>;
    }
  };

  return (
    <div className="StudentList">
      <div className="StudentList__Controls">
        <input value={searchInput} type="text" placeholder="Search By Name" onChange={handleChange} />
        <button onClick={() => handleExpandAll()}>Expand All</button>
        <button onClick={() => handleCollapseAll()}>Collapse All</button>
      </div>
      {renderContent()}
    </div>
  );
};

export default StudentList;
