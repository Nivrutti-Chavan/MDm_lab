export default function AttendanceBar({ pct }) {
  return (
    <div>
      <div style={{ width: pct + "%", background: "green", height: "10px" }} />
      <span>{pct}%</span>
    </div>
  );
}
