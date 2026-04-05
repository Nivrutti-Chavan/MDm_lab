const menu = [
  "dashboard",
  "attendance",
  "marks",
  "timetable",
  "fees",
  "library",
  "notices",
  "profile",
];

export default function Sidebar({ setPage, page }) {
  return (
    <div style={{
      width: "200px",
      background: "#fff",
      padding: "10px",
      borderRight: "1px solid #ddd"
    }}>
      {menu.map((m) => (
        <button
          key={m}
          onClick={() => setPage(m)}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            background: page === m ? "#0d2b6e" : "#eee",
            color: page === m ? "#fff" : "#000",
            cursor: "pointer",
            textTransform: "capitalize"
          }}
        >
          {m}
        </button>
      ))}
    </div>
  );
}