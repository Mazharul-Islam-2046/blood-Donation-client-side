import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MoreVert } from '@mui/icons-material';
import useAxiosPublic from '../../../../../Hooks/useAxiosPublic';
import PropTypes from 'prop-types'
import { AuthContext } from '../../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

export default function PositionedMenu({id, status}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {setUserRefetch, userRefetch} = React.useContext(AuthContext)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [axiosPublic] = useAxiosPublic()
  const handleStatus = (action) => {
    const newStatus = {status: action}
     axiosPublic.patch(`/users/status/${id}`, newStatus)
     .then(data => {
      if (data) {
        setUserRefetch(!userRefetch)
        handleClose()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Status Changed Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
     })
  }



  const handleRole = (action) => {
    const newRole = {role: action}
     axiosPublic.patch(`/users/role/${id}`, newRole)
     .then(data => {
      if (data) {
        setUserRefetch(!userRefetch)
        handleClose()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Role Changed Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
     })
  }

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVert/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=> handleRole("admin")}>Make Admin</MenuItem>
        <MenuItem onClick={()=> handleRole("volunteer")}>Make Volunteer</MenuItem>
        {
          status === "active" ? <MenuItem onClick={() => handleStatus("block")}>Block</MenuItem> : <MenuItem onClick={() => handleStatus("active")}>Active</MenuItem>
        }
        
      </Menu>
    </div>
  );
}
PositionedMenu.propTypes = {
    id: PropTypes.string,
    status: PropTypes.string
}