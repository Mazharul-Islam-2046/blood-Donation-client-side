import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";

const Form = () => {
  const { districts, upazilas, setSearchedUsers, allUsers } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
  } = useForm();
  // const [axiosPublic] = useAxiosPublic();


  const handleSearchRequest = (data) => {
      const searchData = allUsers.filter(user => user?.bloodGroup === data?.bloodGroup || user?.district === data?.district || user?.upazila === data?.upazila)
      setSearchedUsers(searchData)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSearchRequest)} className="">
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
            {...register("bloodGroup")}
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
            {...register("district")}
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

        {/* Upazila Select----------------------------------------------------- */}
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: "40ch", mb: 4, py: 1 }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Upazila
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            {...register("upazila")}
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

        {/* Email-------------------------------------------------------------- */}
        {/* <FormControl
          sx={{ m: 1, width: "40ch", mb: 4, py: 1 }}
          variant="standard"
        >
          <InputLabel shrink htmlFor="Email">
            Requester Email
          </InputLabel>
          <TextField
            {...register("email")}
            type="text"
            variant="standard"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
          />
        </FormControl> */}

        {/* Button --------------------------------------------------- */}
        <FormControl sx={{ m: 1, width: "85%", mb: 4 }} variant="standard">
          <Button
            sx={{ borderColor: "#FF2400", color: "#235870" }}
            type="submit"
            variant="outlined"
          >
            <Typography fontWeight="fontWeightBold">Search</Typography>
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default Form;
