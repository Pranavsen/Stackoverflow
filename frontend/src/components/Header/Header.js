import React from "react";
import "./css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import InboxIcon from "@mui/icons-material/Inbox";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <NavLink to="/home">
            <img
              src="https:upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
              alt="logo"
            />
          </NavLink>
          <h3>Products</h3>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            <span onClick={() =>{
              auth.signOut()
              localStorage.clear();
              navigate('/')
            }}>
              <Avatar
                style={{
                  cursor: "pointer",
                }}
                src={
                  user
                    ? user.photo
                    : "https://p7.hiclipart.com/preview/312/283/679/avatar-computer-icons-user-profile-business-user-avatar.jpg"
                }
                alt="profile"
              />
            </span>
            <InboxIcon />
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
