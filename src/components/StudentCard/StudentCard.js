import { useState } from "react";
import "./StudentCard.css";
import { GrAdd, GrFormSubtract } from "react-icons/gr";

const StudentCard = ({ student }) => {
  const [expanded, setExpanded] = useState(false);
  const { id, firstName, lastName, company, email, pic, skill, grades } = student;

  //convert the grades to numbers and add them to get the total grades.
  const totalGrades = grades.reduce((a, b) => {
    return Number(a) + Number(b);
  });

  //divide the total grades by the amount of grades to get the average.
  const studentAverage = totalGrades / grades.length;

  // display grades when expanded state is truthy.
  const testGrades = expanded ? grades.map((grade, i) => <li key={grade - i}>{`Test ${i + 1} ${grade}%`}</li>) : "";

  return (
    <div className="StudentCard" key={id}>
      <div className="StudentCard__avatar">
        <img src={pic} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="StudentCard__info">
        <button onClick={() => setExpanded(!expanded)}>{expanded ? <GrFormSubtract /> : <GrAdd />}</button>
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
    </div>
  );
};

export default StudentCard;
