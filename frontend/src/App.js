import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from "./pages/Dashboard.jsx"
import AddCompany from "./pages/AddCompany.jsx"
import Login from "./pages/Login.jsx"
import PendingLeaves from "./pages/PendingLeaves.jsx"
import FileLeave from "./pages/FileLeave.jsx"

import EmployeeProfile from "./pages/EmployeeProfile.jsx"
import EmployeesList from "./pages/admin/EmployeesList.jsx"
// import AddEmployee from "./pages/admin/AddEmployee.jsx"
import Announcements from "./pages/hr/Announcements.jsx"
import AddAnnouncements from "./pages/hr/AddAnnouncements.jsx"
import ClientUserProfile from "./pages/client/ClientUserProfile.jsx";
import AddEmployee from "./pages/hr/AddEmployee.jsx";

import UserLogs from "./pages/admin/UserLogs.jsx"

import AdminDashboard from "./pages/admin/AdminDashboard.jsx"
import LeadDashboard from "./pages/leads/LeadDashboard.jsx"
import HRDashboard from "./pages/hr/HRDashboard.jsx"
import ClientDashboard from "./pages/client/ClientDashboard"
import WidgetPending from "./pages/widgets/WidgetPending.jsx"
import LeadPTORequest from "./pages/leads/LeadPTORequests";
import HRProfile from "./pages/hr/HRProfile.jsx";
import ManagerProfile from "./pages/leads/ManagerProfile.jsx";
import ViewEmployee from "./pages/hr/ViewEmployee.jsx";
<<<<<<< HEAD
import EditEmployee from "./pages/hr/EditEmployee.jsx";
=======
import LeadDirectory from "./pages/leads/LeadDirectory.jsx";
>>>>>>> origin/marvin

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
          <Route path="/editEmployee" element={<EditEmployee />} />

          {/* <Route path="/viewEmployee" element={<ViewEmployee />} /> */}
          <Route path="/viewEmployee/:emp_id" element={<ViewEmployee />} />
          <Route path="/addCompany" element={<AddCompany />} />
          <Route path="/hrProfile" element={<HRProfile />} />


          {/* Employee Routes */}
          <Route path="/employees" element={<EmployeesList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employeeProfile" element={<EmployeeProfile />} />
          <Route path="/clientDashboard" element={<ClientDashboard />} />
          <Route path="/showPendingLeaves" element={<PendingLeaves />} />
          <Route path="/fileLeave" element={<FileLeave />} />
          <Route path="/empProfile" element={<ClientUserProfile />} />


          {/* Team Lead Routes */}
          <Route path="/leadDashboard" element={<LeadDashboard />} /> 
          <Route path="/widgetPending" element={<WidgetPending />} />
          <Route path="/leadPTORequests" element={<LeadPTORequest />} />
          <Route path="/manProfile" element={<ManagerProfile />} />
          <Route path="/leadDirectory" element={<LeadDirectory />} />



        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
