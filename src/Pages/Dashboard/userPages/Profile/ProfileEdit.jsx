import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const ProfileEdit = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [axiosPublic] = useAxiosPublic();

  const { districts, upazilas, userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const imageKey = import.meta.env.VITE_IMG_BB_API_KEY;


  const handleRegister = (data) => {
    console.log(data);
    // const name = data.name;
    // const bloodGroup = data.bloodGroup;
    // const district = data.district;
    // const upazila = data.upazila;
    // const age = data.age;
    // const image = data.image
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    // console.log(email, name, bloodGroup, image[0], age, upazila, district);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {  name, bloodGroup, district, upazila, age } = data;
          const newUser = {
            name,
            age,
            bloodGroup,
            district,
            upazila,
            image: imgURL,
            role: userData?.role,
            status: userData?.status,
          };
          axiosPublic.patch(`/users/${userData._id}`, newUser).then((data) => {
            console.log("after updating new user Data", data.data);
            if (data.data) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Updated Successfully",
                showConfirmButton: false,
                timer: 1500,
              });

              navigate(from, { replace: true });
            }
          });
        }
      });

    //
  };

  return (
    <div className="flex justify-center items-center h-auto min-h-screen">
      <div className="flex flex-col bg-slate-300 w-4/5 py-6 px-4 justify-center items-center rounded-md">
        <h1 className="text-4xl mb-8 font-semibold">Edit Profile</h1>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className=" grid grid-cols-2 gap-x-16"
        >
          <div className="flex flex-col justify-center items-center">
            <FormControl
              sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
              variant="standard"
            >
              <InputLabel htmlFor="Name">Name</InputLabel>
              <Input
                {...register("name", {
                  required: true,
                })}
                type="text"
                endAdornment={<InputAdornment position="end"></InputAdornment>}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Name is required</p>
              )}
            </FormControl>
            <FormControl
              sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
              variant="standard"
            >
              <InputLabel shrink htmlFor="Email">
                Email
              </InputLabel>
              <Input
                {...register("email", {
                  required: true,
                })}
                InputProps={{
                  readOnly: true,
                }}
                value={userData?.email}
                type="text"
                endAdornment={<InputAdornment position="end"></InputAdornment>}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}
            </FormControl>
            {/* Blood Select----------------------------------------------------- */}
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: "40ch", mb: 4, py: 1 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Blood Group
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                {...register("bloodGroup", {
                  required: true,
                })}
                label="Blood Group"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"A+"}>A+</MenuItem>
                <MenuItem value={"A-"}>A-</MenuItem>
                <MenuItem value={"B+"}>B+</MenuItem>
                <MenuItem value={"B-"}>B-</MenuItem>
                <MenuItem value={"AB+"}>AB+</MenuItem>
                <MenuItem value={"AB-"}>AB-</MenuItem>
                <MenuItem value={"O+"}>O+</MenuItem>
                <MenuItem value={"O-"}>O-</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="flex flex-col justify-center items-center">
            {/* District Select----------------------------------------------------- */}
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: "40ch", mb: 4, py: 1 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                District
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                {...register("district", {
                  required: true,
                })}
                label="District"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {districts?.map((district, idx) => (
                  <MenuItem key={idx} value={district?.name}>
                    {district?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* District Select----------------------------------------------------- */}
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: "40ch", mb: 4, py: 1 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Upazila
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                {...register("upazila", {
                  required: true,
                })}
                label="Upazila"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {upazilas?.map((upazila, idx) => (
                  <MenuItem key={idx} value={upazila?.name}>
                    {upazila?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Age----------------------------------------------- */}
            <FormControl
              sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
              variant="standard"
            >
              <InputLabel htmlFor="Age">Age</InputLabel>
              <Input
                {...register("age", {
                  required: true,
                })}
                type="number"
                endAdornment={<InputAdornment position="end"></InputAdornment>}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Age is required</p>
              )}
            </FormControl>
          </div>

          <div className="col-span-2 flex justify-center">
            {/* Upload Image */}
            <FormControl
              sx={{ m: 1, width: "75%", mb: 1, mt: 4, py: 1 }}
              variant="standard"
            >
              <InputLabel shrink>Profile Picture</InputLabel>
              <Input
                {...register("image", {
                  required: true,
                })}
                type="file"
                endAdornment={<InputAdornment position="end"></InputAdornment>}
              />

              {errors.email?.type === "required" && (
                <p className="text-red-600">Name is required</p>
              )}
            </FormControl>
          </div>

          <div className="col-span-2 flex justify-center">
            <FormControl sx={{ m: 1, width: "75%", mb: 4 }} variant="standard">
              <Button
                sx={{ borderColor: "#FF2400", color: "#235870" }}
                type="submit"
                variant="outlined"
              >
                <Typography fontWeight="fontWeightBold">Register</Typography>
              </Button>
            </FormControl>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
