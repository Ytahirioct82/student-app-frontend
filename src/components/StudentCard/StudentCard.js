import "./StudentCard.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const StudentCard = ({ student, expanded, onClick }) => {
  const { id, firstName, lastName, company, email, pic, skill, grades } = student;

  //convert the grades to numbers and add them to get the total grades.
  const totalGrades = grades.reduce((a, b) => {
    return Number(a) + Number(b);
  });

  //divide the total grades by the amount of grades to get the average.
  const studentAverage = totalGrades / grades.length;

  // display grades when expanded state is truthy.
  const testGrades = expanded
    ? grades.map((grade, i) => (
        <li key={`${grade} - ${i}`}>
          <span>Test {i + 1}</span>
          <span>{grade}%</span>
        </li>
      ))
    : "";

  return (
    <div className="StudentCard" key={id}>
      <div className="StudentCard__avatar">
        <img src={pic} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="StudentCard__info">
        <h1>
          {firstName} {lastName}
        </h1>
        <ul>
          <li>Email: {email}</li>
          <li>Company: {company}</li>
          <li>Skill: {skill}</li>
          <li>Average: {studentAverage}%</li>
        </ul>
        <div className="StudentCard__grades">
          <ul>{testGrades}</ul>
        </div>
      </div>
      <div className="StudentCard__buttons">
        <button onClick={onClick}>{expanded ? <FaMinus /> : <FaPlus />}</button>
      </div>
    </div>
  );
};

export default StudentCard;
