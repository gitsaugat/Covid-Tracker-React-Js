import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import TelegramIcon from "@material-ui/icons/Telegram";
import { IconButton } from "@material-ui/core";
import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <IconButton>
        <AcUnitIcon className="header_icon" fontSize="large" />
      </IconButton>
      <h1>
        {" "}
        <IconButton>Tracker </IconButton>
      </h1>
      <IconButton></IconButton>
    </div>
  );
}
export default Header;
