import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Popper from "@mui/material/Popper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Fade, Box, Paper, TextField, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import SimCardRoundedIcon from "@mui/icons-material/SimCardRounded";
import { doLogout } from "../../store/action/AuthAction";

export default function DropDown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userName = useSelector((state) => state.AuthReducer.user);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const closeHandler = () => {
    setOpen(false);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

const logoutHandler =()=>{
dispatch(doLogout())
}

  return (
    <div >
      <Button aria-describedby={id} type="button" onClick={handleClick} style={{color:'blue'}}>
        <MenuIcon />
      </Button>

      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Container>

            <Box sx={{ p: 1 }}>
              <Paper elevation={5} style={{ width: "100%", height: "auto" ,borderRadius:"20px"}}>
                <div className="profileContainer">
                <small>Hello</small>
                    <h3>Welcome</h3>
                    <p>{userName?.email}</p>
                </div>
                <hr />
                <List component="nav" aria-label="main mailbox folders">
                  
                  <Link
                    to="/properties"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItemButton onClick={closeHandler}>
                      <ListItemIcon>
                        <SimCardRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="My Property" />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/favourite"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItemButton onClick={closeHandler}>
                      <ListItemIcon>
                        <FavoriteBorderRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="My Favourite" />
                    </ListItemButton>
                  </Link>
                  <ListItemButton onClick={logoutHandler}>
                    <ListItemIcon>
                      <LogoutRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </List>
              </Paper>
            </Box>
            </Container>

          </Fade>
        )}
      </Popper>
    </div>
  );
}
