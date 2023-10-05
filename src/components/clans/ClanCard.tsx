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
import { Box, Paper } from "@mui/material";
import Clan from "../../models/clan/clan.model";
import {
  LensBlur,
  SensorsOffOutlined,
  SensorsOutlined,
} from "@mui/icons-material";

const ClanCard: React.FC<{ clan: Clan }> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LensBlur></LensBlur>
        </ListItemIcon>
        <ListItemText primary={props.clan.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SensorsOutlined></SensorsOutlined>
            </ListItemIcon>
            <ListItemText primary={`Members : ${props.clan.totalMemebers}`} />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

export default ClanCard;
