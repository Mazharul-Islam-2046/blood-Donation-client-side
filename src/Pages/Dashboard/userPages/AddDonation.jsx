import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddDonation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [axiosPublic] = useAxiosPublic();
  const navigate = useNavigate();

  const { districts, upazilas, userData, user, reqRefetch, setReqRefetch } = useContext(AuthContext);

  const handleDonationRequest = (data) => {
    console.log("working");
    console.log(data);
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
      recipentName,
      requesterName,
      requesterEmail,
      hospitalName,
      addressName,
      bloodGroup,
      recipentDistrict,
      recipentUpazila,
      donationDate,
    } = data;
    const donationReq = {
      recipentName,
      requesterName,
      requesterEmail,
      hospitalName,
      addressName,
      bloodGroup,
      recipentDistrict,
      recipentUpazila,
      donationDate,
      status: "pending",
      donorName: "",
      donorEmail: "",
    };
    axiosPublic.post("/addDonationReq", donationReq).then((data) => {
      if (data.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Donation Request Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        
        setReqRefetch(!reqRefetch)
        navigate("/dashboard");
      }
    });
  };

  return (
    <div className="my-10">
      <div className="flex justify-center items-center h-auto min-h-screen">
        <div className="flex flex-col bg-slate-300 w-4/5 py-20 px-4 justify-center items-center rounded-md">
          <h1 className="text-4xl mb-8 font-semibold">Add Donation Request</h1>
          <form
            onSubmit={handleSubmit(handleDonationRequest)}
            className=" grid grid-cols-2 gap-20"
          >
            <div className="flex flex-col items-center">
              {/* Recipent Name--------------------------------------- */}
              <FormControl
                sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
                variant="standard"
              >
                <InputLabel htmlFor="Recipent Name">Recipent Name</InputLabel>
                <Input
                  {...register("recipentName", {
                    required: true,
                  })}
                  type="text"
                  endAdornment={
                    <InputAdornment position="end"></InputAdornment>
                  }
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Recipent Name is required</p>
                )}
              </FormControl>

              {/* Requester Name---------------------------------------- */}
              <FormControl
                sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
                variant="standard"
              >
                <InputLabel shrink htmlFor="Requester Name">
                  Requester Name
                </InputLabel>
                <TextField
                  {...register("requesterName")}
                  id="outlined-read-only-input"
                  type="text"
                  value={userData?.name}
                  variant="standard"
                  InputProps={{
                    readOnly: true,
                  }}
                  endAdornment={
                    <InputAdornment position="end"></InputAdornment>
                  }
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Requester Name is required</p>
                )}
              </FormControl>

              {/* Requester Email -------------------------------------- */}
              <FormControl
                sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
                variant="standard"
              >
                <InputLabel shrink htmlFor="Recipent Email">
                  Requester Email
                </InputLabel>
                <TextField
                  {...register("requesterEmail")}
                  type="text"
                  variant="standard"
                  value={user?.email}
                  InputProps={{
                    readOnly: true,
                  }}
                  endAdornment={
                    <InputAdornment position="end"></InputAdornment>
                  }
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Recipent Email is required</p>
                )}
              </FormControl>

              {/* Hospital Name---------------------------------------- */}
              <FormControl
                sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
                variant="standard"
              >
                <InputLabel htmlFor="Hospital Name">Hospital Name</InputLabel>
                <Input
                  {...register("hospitalName", {
                    required: true,
                  })}
                  type="text"
                  endAdornment={
                    <InputAdornment position="end"></InputAdornment>
                  }
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Hospital Name is required</p>
                )}
              </FormControl>

              {/* Hospital Address---------------------------------------- */}
              <FormControl
                sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
                variant="standard"
              >
                <InputLabel htmlFor="Address Name">Address Name</InputLabel>
                <Input
                  {...register("addressName", {
                    required: true,
                  })}
                  type="text"
                  endAdornment={
                    <InputAdornment position="end"></InputAdornment>
                  }
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Hospital Address is required</p>
                )}
              </FormControl>
            </div>

            <div className="flex flex-col items-center">
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
                  Recipent District
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  {...register("recipentDistrict", {
                    required: true,
                  })}
                  label="Recipent District"
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

              {/* Upazila Select----------------------------------------------------- */}
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: "40ch", mb: 4, py: 1 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Recipent Upazila
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  {...register("recipentUpazila", {
                    required: true,
                  })}
                  label="Recipent Upazila"
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

              {/* Date----------------------------------------------- */}
              <FormControl
                sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
                variant="standard"
              >
                <InputLabel shrink htmlFor="Donation Date">
                  Donation Date
                </InputLabel>
                <Input
                  {...register("donationDate", {
                    required: true,
                  })}
                  type="date"
                  endAdornment={
                    <InputAdornment position="end"></InputAdornment>
                  }
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Donation is required</p>
                )}
              </FormControl>
            </div>

            <div className="col-span-2 flex justify-center">
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
      </div>
    </div>
  );
};

export default AddDonation;
