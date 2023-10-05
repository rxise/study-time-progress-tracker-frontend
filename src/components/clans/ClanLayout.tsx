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
import ClanCard from "./ClanCard";
import Clan from "../../models/clan/clan.model";

export default function ClanLayout() {
  let clans: Clan[] = [
    new Clan("Clan 2", 10, [""]),
    new Clan("Edgerunner", 30, [""]),
  ];
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Clans
        </ListSubheader>
      }
    >
      {clans.map((clan) => (
        <ClanCard clan={clan}></ClanCard>
      ))}
    </List>
  );
}
