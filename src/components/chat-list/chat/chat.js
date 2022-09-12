import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import {memo} from "react";


export const Chat = memo(({ title, selected }) => {
  return (
    <ListItemButton
      selected={selected}
      // onClick={() => handeleListItemClick(title)}
    >
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>

      <div>
        <ListItemText primary={title} />
      </div>
    </ListItemButton>)
});