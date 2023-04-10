import { Public, Stars, Work } from "@mui/icons-material";
import React from "react";
import { NavLink } from 'react-router-dom'
import "./css/Sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <NavLink>Home</NavLink>
          </div>
          <div className="sidebar-option">
            <p>PUBLIC</p>
            <div className="link">
              <div className="link-tag activedb">
                <Public />
                <NavLink >Question</NavLink>
              </div>
              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <Stars />
                <NavLink>Explore Collectives</NavLink>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>FIND A JOB</p>
            <div className="link">
            <div className="tags">
            <p>Jobs</p>
            <p>Companies</p>
          </div>
            </div>
          </div>
          <div className="sidebar-option">
          <p>TEAMS</p>
          <div className="link">
            <div className="link-tag">
              <Work />
              <NavLink>Companies</NavLink>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
