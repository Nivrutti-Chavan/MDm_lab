export default function AttendancePage() {
  const data = [
    { subject: "DSA", percent: "90%" },
    { subject: "DBMS", percent: "80%" }
  ];

  return (
    <div>
      <h2>Attendance</h2>
      {data.map((d, i) => (
        <p key={i}>{d.subject} - {d.percent}</p>
      ))}
    </div>
  );
}