import { Box, Menu, MenuItem, Typography, styled } from "@mui/material";
import React, { useState } from "react";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  mergin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setAccount('');
  };

  return (
    <>
      <Box onClick={handleClick} className="mouse-pointer">
        <Typography style={{ marginTop: 2 }}>{account}</Typography>
        <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              handleClose();
              logout();
            }}
          >
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Logout onClick={logout}>Logout</Logout>
          </MenuItem>
        </Component>
      </Box>
    </>
  );
};

export default Profile;
