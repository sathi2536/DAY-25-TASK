import React from "react";
import { Link,useNavigate  } from "react-router-dom";

function Sidebar() {
    let navigate=useNavigate()
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <div
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />
        <Link to="/dashboard">
          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item active">
            <div className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </div>
          </li>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <Link to="/add-profile">
          <li className="nav-item">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fa-solid fa-user-plus"></i>
              <span>Add User</span>
            </div>
          </li>
        </Link>
        <Link to="/profile">
          <li className="nav-item">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fa-solid fa-user"></i>
              <span>Profile</span>
            </div>
          </li>
        </Link>
        <Link to="/pending-request">
          <li className="nav-item">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fa-solid fa-wrench"></i>
              <span>Pending Request</span>
            </div>
          </li>
        </Link>
        
          <li className="nav-item" onClick={()=>navigate("/tasks")}>
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fa-solid fa-list-check"></i>
              <span>Task</span>
            </div>
          </li>
        
      </ul>
    </>
  );
}

export default Sidebar;
