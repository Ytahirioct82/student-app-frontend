import "./StudentCard.css";
const { student } = "../StudentList/StudentList.js";

const StudentCard = ({ student }) => {
  const { id, firstName, lastName, company, email, pic, skill, grades } = student;

  //convert the grades to numbers and add them to get the total grades.
  const totalGrades = grades.reduce((a, b) => {
    return Number(a) + Number(b);
  });

  //divide the total grades by the amount of grades to get the average.
  const studentAverage = totalGrades / grades.length;

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
      </div>
    </div>
  );
};

export default StudentCard;
