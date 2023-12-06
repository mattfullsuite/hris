import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from "./pages/Dashboard.jsx"
import AddCompany from "./pages/AddCompany.jsx"
import Login from "./pages/Login.jsx"
import PendingLeaves from "./pages/PendingLeaves.jsx"
import FileLeave from "./pages/FileLeave.jsx"

import EmployeeProfile from "./pages/EmployeeProfile.jsx"
import EmployeesList from "./pages/admin/EmployeesList.jsx"
import AddEmployee from "./pages/admin/AddEmployee.jsx"
import Announcements from "./pages/hr/Announcements.jsx"
import AddAnnouncements from "./pages/hr/AddAnnouncements.jsx"
import ClientUserProfile from "./pages/client/ClientUserProfile.jsx";

import UserLogs from "./pages/admin/UserLogs.jsx"

import AdminDashboard from "./pages/admin/AdminDashboard.jsx"
import LeadDashboard from "./pages/leads/LeadDashboard.jsx"
import HRDashboard from "./pages/hr/HRDashboard.jsx"
import ClientDashboard from "./pages/client/ClientDashboard"
import WidgetPending from "./pages/widgets/WidgetPending.jsx"
import LeadPTORequest from "./pages/leads/LeadPTORequests";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* General Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          {/* Administrator Routes */}
          <Route path="/userLogs" element={<UserLogs />} /> 
          <Route path="/adminDashboard" element={<AdminDashboard />} /> 
          {/* HR Routes */}
          <Route path="/hrDashboard" element={<HRDashboard />} /> 
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/addAnnouncements" element={<AddAnnouncements />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/addCompany" element={<AddCompany />} />

          {/* Employee Routes */}
          <Route path="/employees" element={<EmployeesList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employeeProfile" element={<EmployeeProfile />} />
          <Route path="/clientDashboard" element={<ClientDashboard />} />
          <Route path="/showPendingLeaves" element={<PendingLeaves />} />
          <Route path="/fileLeave" element={<FileLeave />} />
          <Route path="/profile" element={<ClientUserProfile />} />


          {/* Team Lead Routes */}
          <Route path="/leadDashboard" element={<LeadDashboard />} /> 
          <Route path="/widgetPending" element={<WidgetPending />} />
          <Route path="/leadPTORequests" element={<LeadPTORequest />} />



        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
