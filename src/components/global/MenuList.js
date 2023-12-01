import * as React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";

export const MenuList = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/")}>
        <ListItemIcon>
          <DashboardIcon color="secondary"></DashboardIcon>
        </ListItemIcon>
        <ListItemText primary="Homepage"></ListItemText>
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/leaderboard")}>
        <ListItemIcon>
          <GradeRoundedIcon color="warning"></GradeRoundedIcon>
        </ListItemIcon>
        <ListItemText primary="Leaderboard"></ListItemText>
      </ListItemButton>
    </React.Fragment>
  );
};
