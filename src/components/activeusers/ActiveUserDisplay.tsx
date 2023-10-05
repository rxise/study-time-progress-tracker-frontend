import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function ActiveUserDisplay() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Current Active Users
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>AD</Avatar>
        </ListItemIcon>
        <ListItemText primary="AD" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        </ListItemIcon>
        <ListItemText primary="Naveen" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>P</Avatar>
        </ListItemIcon>
        <ListItemText primary="Pooja" />
      </ListItemButton>
    </List>
  );
}
