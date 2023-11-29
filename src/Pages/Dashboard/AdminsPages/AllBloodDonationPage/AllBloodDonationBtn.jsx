import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Delete, MoreVert } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

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
  const { setReqRefetch, reqRefetch } = React.useContext(AuthContext);

  const handleDeleteReq = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/donationReq/delete/${id}`)
      .then(res => {
        console.log(res);
        setReqRefetch(!reqRefetch)
      })
      setAnchorEl(null);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
      
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
          <Link to={`/dashboard/edit-donation-request/${id}`}>Edit</Link>
        </MenuItem>
        <MenuItem onClick={handleDeleteReq}><Delete/></MenuItem>
      </Menu>
    </div>
  );
}


AllBloodDonationBtn.propTypes = {
  id: PropTypes.string
}