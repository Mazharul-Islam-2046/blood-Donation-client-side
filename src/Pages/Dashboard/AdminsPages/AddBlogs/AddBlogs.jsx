import { Button, FormControl, Input, InputAdornment, InputLabel, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from "@emotion/styled";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const AddBlogs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const {userData, loading} = useContext(AuthContext)
  const navigate = useNavigate();
  const [axiosPublic] = useAxiosPublic()


  const handleBlogAdd = (data) => {
    if (userData.status === "block") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You are Blocked by Admin",
        });
        navigate("/dashboard");
        return console.log("You are blocked By Admin");
      }
  
      const {
        title,
        blog,
        image
      } = data;
      const blogData = {
        title,
        blog,
        image,
        writer: userData.name,
        email: userData.email,
        status: "draft",
      };
      axiosPublic.post("/blogs/addBlogs", blogData).then((data) => {
        if (data.data.insertedId) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Blog Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          
          navigate("/dashboard");
        }
      });
  }

  return (
    <div className="flex justify-center">
        { loading ? <div>
            <h1>loading</h1>
        </div> :
            <div>
            <h2 className="text-4xl font-bold text-center mb-6 mt-2">Add Blogs</h2>
            <form onSubmit={handleSubmit(handleBlogAdd)}>
              <div className="flex flex-col items-center">
                <FormControl
                  sx={{ m: 1, width: "100ch", mb: 4, py: 1 }}
                  variant="standard"
                >
                  <InputLabel htmlFor="Title of the Blog">
                    Title of the Blog
                  </InputLabel>
                  <Input
                    {...register("title", {
                      required: true,
                    })}
                    type="text"
                    endAdornment={<InputAdornment position="end"></InputAdornment>}
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-600">Title of the Blog is required</p>
                  )}
                </FormControl>
      
                <FormControl
                  sx={{ m: 1, width: "100ch", mb: 4, py: 1 }}
                  variant="standard"
                >
                  <InputLabel htmlFor="Blog Content">Blog Content</InputLabel>
                  <Input
                  sx={{ borderColor: "#FF2400", color: "#235870" }}
                  variant= "outlined"
                    {...register("blog", {
                      required: true,
                    })}
                    type="text"
                    multiline
                    rows={6}
                    endAdornment={<InputAdornment position="end"></InputAdornment>}
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-600">Blog Content is required</p>
                  )}
                </FormControl>
      
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput {...register("image", {
                      required: true,
                    })} type="file" />
                </Button>
      
                <FormControl
                    sx={{ m: 1, width: "75%", mb: 4 }}
                    variant="standard"
                  >
                    <Button
                      sx={{ borderColor: "#FF2400", color: "#235870" }}
                      type="submit"
                      variant="outlined"
                    >
                      <Typography fontWeight="fontWeightBold">
                        Add Donation Request
                      </Typography>
                    </Button>
                  </FormControl>
              </div>
            </form>
          </div>
        }
      
      
    </div>
  );
};

export default AddBlogs;
