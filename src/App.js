import React from "react";
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import AddUser from "./components/AddUser";
import Tasks from "./components/Tasks";
import PendingRequest from "./components/PendingRequest";
import Profile from "./components/Profile";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import ProfileDetails from "./components/ProfileDetails";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-profile" element={<AddUser />} />
            <Route path="/profile" element={<Profile />}>
               <Route path="details" element={<ProfileDetails/>}/>
               <Route path="reset-password" element={<ResetPassword/>}/>
            </Route>
            <Route path="/pending-request" element={<PendingRequest />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/*" element={<Navigate to="/dashboard"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
