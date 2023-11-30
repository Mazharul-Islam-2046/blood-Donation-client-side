import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MoreVert } from "@mui/icons-material";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

export default function BlogBtn({ id }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [axiosSecure] = useAxiosSecure();
  const {blogsFetch, setBlogFetch} = React.useContext(AuthContext)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //   Handle Delete
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/blogs/delete/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setBlogFetch(!blogsFetch)
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
          }
        });
      }
    });
  };




//   Handle Publish
const handlePublish = () => {
    axiosSecure.patch(`/blogs/publish/${id}`)
    .then((res) => {
        console.log(res);
    })
}

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
        <Link to={`/dashboard/edit-blogs/${id}`}>Edit</Link></MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem onClick={handlePublish}>Publish</MenuItem>
      </Menu>
    </div>
  );
}
BlogBtn.propTypes = {
  id: PropTypes.string,
};
