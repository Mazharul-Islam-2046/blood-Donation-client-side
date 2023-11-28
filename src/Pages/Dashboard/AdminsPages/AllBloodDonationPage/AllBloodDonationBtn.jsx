import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Delete, MoreVert } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../Providers/AuthProvider';

export default function AllBloodDonationBtn({id}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [axiosSecure] = useAxiosSecure()
  const { setReqRefetch } = React.useContext(AuthContext);

  const handleDeleteReq = () => {
      axiosSecure.delete(`/donationReq/delete/${id}`)
      .then(res => {
        console.log(res);
        setReqRefetch(true);
      })
      setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>
          <Link>Edit</Link>
        </MenuItem>
        <MenuItem onClick={handleDeleteReq}><Delete/></MenuItem>
      </Menu>
    </div>
  );
}


AllBloodDonationBtn.propTypes = {
  id: PropTypes.string
}