import StudentCard from "../StudentCard/StudentCard";
import "./StudentList.css";

const StudentList = ({ studentData }) => {
  // creates a student card for each student.
  const students = studentData.map((student) => <StudentCard student={student} key={student.id} />);
  return <div className="StudentList">{students}</div>;
};

export default StudentList;
