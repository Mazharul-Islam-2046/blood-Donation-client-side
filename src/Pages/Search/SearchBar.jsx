import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Form from './Components/Form';
import { Book, Dashboard, Home, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });




  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>
                {
                  <Form/>
                }
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
        {['Home', 'Dashboard', 'Blogs'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === "Home" ? <Home/> : text === "Dashboard" ? <Dashboard/> : <Book/>}
              </ListItemIcon>
              <ListItemText>
                <Link to={text === "Home" ? "/" : text === "Dashboard" ? "/dashboard" : "/blogs"}>{text}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}><Menu sx={{ color: "#ffffff" }}/></Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}