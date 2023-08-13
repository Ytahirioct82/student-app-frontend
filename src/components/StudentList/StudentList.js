import { useState } from "react";
import StudentCard from "../StudentCard/StudentCard";
import "./StudentList.css";

const StudentList = ({ studentData }) => {
  // when I type the input, I should see student by name
  const [searchInput, setSearchInput] = useState("");

  // handles the user input and sets the value to the searchInput state.
  const handleChange = (event) => {
    setSearchInput(event.target.value);
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
            <StudentCard student={student} key={student.id} />
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
      <div className="StudentList__input">
        <input value={searchInput} type="text" placeholder="Search By Name" onChange={handleChange} />
      </div>
      {renderContent()}
    </div>
  );
};

export default StudentList;
