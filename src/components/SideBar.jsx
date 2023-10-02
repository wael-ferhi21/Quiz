import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

const SideBar = () => {
  const { userdispatcher } = useUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    userdispatcher({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <DashboardIcon /> Dashboard
        </li>
        <li>
          <SupportAgentIcon /> Support
        </li>
        <li>
          <NotificationsIcon /> Notification
        </li>
      </ul>
      <div className='logout__icon'>
        <button className='logout__button' onClick={handleLogout}>
          <LogoutIcon />
          <h2>Log out</h2>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
