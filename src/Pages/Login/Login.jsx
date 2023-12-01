import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";






  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
  };

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="flex flex-col bg-slate-300 w-2/6 py-6 px-4 justify-center items-center rounded-md">
        <h1 className="text-4xl mb-8 font-semibold">Login</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className=" flex flex-col justify-center items-center"
        >
          <FormControl
            sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
            variant="standard"
          >
            <InputLabel htmlFor="Email">Email</InputLabel>
            <Input
              {...register("email", {
                 required: true
                })}
              type="text"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
            />
            {errors.email?.type === 'required' && <p className="text-red-600">Email is required</p>}
          </FormControl>
          <FormControl
            sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
            variant="standard"
          >
            <InputLabel htmlFor="password">
              Password
            </InputLabel>
            <Input
              {...register("password", { 
                required: true, 
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
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
            
            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
          </FormControl>

          <p className="mb-6">All Ready Have an Account? <Link to="/register" className="underline">Register</Link></p>

          <FormControl sx={{ m: 1, width: "40ch", mb: 4 }} variant="standard">
            <Button
              sx={{ borderColor: "#FF2400", color: "#235870" }}
              type="submit"
              variant="outlined"
            >
              <Typography fontWeight="fontWeightBold">Login</Typography>
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default Login;
