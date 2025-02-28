import React, { useState } from "react";
import {
  Button,
  Tabs,
  Tab,
  Avatar,
  IconButton,
  InputAdornment,
  InputBase,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff, Edit } from "@mui/icons-material";
import { styled } from "@mui/system";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 9,
    backgroundColor: "#F3F6F9",
    border: "1px solid #E0E3E7",
    fontSize: 16,
    width: "100%",
    padding: "12px 14px",
    paddingRight: "40px", // Space for the icon
    position: "relative",
  },
  "& .MuiInputAdornment-root": {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
  },
}));

const ProfileSettings = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">

      {/* Tabs */}
      <Tabs value={tabValue} onChange={handleChange} aria-label="profile settings tabs">
        <Tab label="Edit Profile" />
        <Tab label="Preferences" />
        <Tab label="Security" />
      </Tabs>

      {tabValue === 0 && (
        <div className="mt-6">
          {/* Profile Image & Form */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Profile Image */}
            <div className="relative mx-auto md:mx-0">
              <Avatar src="/New/profilePhoto.svg" className="w-24 h-24" />
              <IconButton
                color="primary"
                className="absolute bottom-0 right-0 bg-black shadow-lg border-2 border-white"
              >
                <Edit />
              </IconButton>
            </div>

            {/* Profile Form */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <FormControl fullWidth>
                <InputLabel htmlFor="name">Your Name</InputLabel>
                <BootstrapInput id="name" defaultValue="Charlene Reed" />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="username">User Name</InputLabel>
                <BootstrapInput id="username" defaultValue="Charlene Reed" />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <BootstrapInput id="email" defaultValue="charlenereed@gmail.com" />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <BootstrapInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  defaultValue="********"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end" // Ensures correct placement
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="dob">Date of Birth</InputLabel>
                <BootstrapInput id="dob" type="date" defaultValue="1990-01-25" />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="presentAddress">Present Address</InputLabel>
                <BootstrapInput id="presentAddress" defaultValue="San Jose, California, USA" />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="permanentAddress">Permanent Address</InputLabel>
                <BootstrapInput id="permanentAddress" defaultValue="San Jose, California, USA" />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="city">City</InputLabel>
                <BootstrapInput id="city" defaultValue="San Jose" />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="postalCode">Postal Code</InputLabel>
                <BootstrapInput id="postalCode" defaultValue="45962" />
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="country">Country</InputLabel>
                <BootstrapInput id="country" defaultValue="USA" />
              </FormControl>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <Button
              variant="contained"
              color="primary"
              className="bg-black text-white w-full md:w-1/4 rounded-xl" // Add `rounded-lg` for border-radius
            >
              Save
            </Button>
          </div>

        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
