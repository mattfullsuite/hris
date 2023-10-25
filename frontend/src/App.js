import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from "./pages/Dashboard.jsx"
import AddCompany from "./pages/AddCompany.jsx"
import Login from "./pages/Login.jsx"
import EmployeeProfile from "./pages/EmployeeProfile.jsx"
import EmployeesList from "./pages/admin/EmployeesList.jsx"
import AddEmployee from "./pages/admin/AddEmployee.jsx"

import Announcements from "./pages/hr/Announcements.jsx"
import AddAnnouncements from "./pages/hr/AddAnnouncements.jsx"

import UserLogs from "./pages/admin/UserLogs.jsx"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* General Routes */}
          <Route path="/login" element={<Login />} />
          {/* Administrator Routes */}
          <Route path="/userLogs" element={<UserLogs />} /> 
          {/* HR Routes */}
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/addAnnouncements" element={<AddAnnouncements />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/addCompany" element={<AddCompany />} />
          {/* Employee Routes */}
          <Route path="/employees" element={<EmployeesList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employeeProfile" element={<EmployeeProfile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
