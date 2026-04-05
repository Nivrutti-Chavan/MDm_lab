import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <StatCard title="Attendance" value="85%" />
        <StatCard title="Marks" value="78%" />
        <StatCard title="Fees Paid" value="₹40K" />
      </div>
    </div>
  );
}