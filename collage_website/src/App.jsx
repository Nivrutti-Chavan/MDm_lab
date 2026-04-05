import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/AttendancePage";
import Marks from "./pages/Marks";
import Timetable from "./pages/Timetable";
import Fees from "./pages/Fees";
import Library from "./pages/Library";
import Notices from "./pages/Notices";
import Profile from "./pages/Profile";

export default function App() {
  const [page, setPage] = useState("dashboard");

  const PAGES = {
    dashboard: Dashboard,
    attendance: Attendance,
    marks: Marks,
    timetable: Timetable,
    fees: Fees,
    library: Library,
    notices: Notices,
    profile: Profile,
  };

  const Page = PAGES[page];

  return (
    <div>
      <Header />

      <div style={{ display: "flex" }}>
        <Sidebar setPage={setPage} page={page} />

        <main style={{ flex: 1, padding: "20px" }}>
          <Page />
        </main>
      </div>
    </div>
  );
}