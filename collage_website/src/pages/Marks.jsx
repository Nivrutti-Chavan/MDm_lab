export default function Marks() {
    const data = [
      { subject: "DSA", marks: "120/150" },
      { subject: "DBMS", marks: "110/150" }
    ];
  
    return (
      <div>
        <h2>Marks</h2>
        {data.map((d, i) => (
          <p key={i}>{d.subject} - {d.marks}</p>
        ))}
      </div>
    );
  }