export const DEMO_USER = { name: "Rahul Sharma" };

export const MODULES = [
  { id: "dashboard", label: "Dashboard" },
  { id: "attendance", label: "Attendance" }
];

export const ATTENDANCE = [
  { subject: "DSA", conducted: 40, attended: 35 },
  { subject: "DBMS", conducted: 42, attended: 30 }
];

export const pct = (a, b) => Math.round((a / b) * 100);
