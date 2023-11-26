import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
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
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, districts, upazilas } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const bloodGroup = data.bloodGroup;
    console.log(email, name, bloodGroup);
    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Register Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };



  return (
    <div className="flex justify-center items-center h-auto min-h-screen">
      <div className="flex flex-col bg-slate-300 w-3/5 py-6 px-4 justify-center items-center rounded-md">
        <h1 className="text-4xl mb-8 font-semibold">Register</h1>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className=" grid grid-cols-2"
        >
          <div>
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
              <InputLabel htmlFor="Email">Email</InputLabel>
              <Input
                {...register("email", {
                  required: true,
                })}
                type="text"
                endAdornment={<InputAdornment position="end"></InputAdornment>}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}
            </FormControl>

            <FormControl
              sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
              variant="standard"
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </FormControl>
            <FormControl
              sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
              variant="standard"
            >
              <InputLabel htmlFor="Confirm password">
                Confirm Password
              </InputLabel>
              <Input
                {...register("confirm_password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </FormControl>
          </div>

          <div>
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
              <InputLabel>Profile Picture</InputLabel>
              <Input
                {...register("Image", {
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

export default Register;
