import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { Delete, MoreVert } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../Providers/AuthProvider';

export default function DonationStausChangeBtn({id, value}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [axiosSecure] = useAxiosSecure()
  const { setReqRefetch, reqRefetch } = React.useContext(AuthContext);

  const handleStatusUpdate = (action) => {

      const status = {status: action}
      axiosSecure.patch(`/donationReq/${id}`, status)
      .then(res => {
        console.log(res);
        setReqRefetch(!reqRefetch)
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
        {value}
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
        <MenuItem onClick={()=>handleStatusUpdate("done")}>
          <button>Done</button>
        </MenuItem>
        <MenuItem onClick={()=> handleStatusUpdate("canceled")}>
            <button>Canceled</button>
        </MenuItem>
      </Menu>
    </div>
  );
}


DonationStausChangeBtn.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string
}