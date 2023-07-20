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
    <div key={id}>
      <img src={pic} alt={`${firstName} ${lastName}`} />
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
  );
};

export default StudentCard;
