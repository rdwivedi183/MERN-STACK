import React, { useState, useContext } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";

// components
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 40px",
  alignItems: "center",
  "& > *": {
    marginRight: "40px",
    fonntSize: "16px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #2874fe;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => handleOpenDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTOp: 3, width: 135 }}>
        Become a seller
      </Typography>
      <Typography style={{ marginTOp: 3 }}>More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      {open && <LoginDialog open={open} setOpen={setOpen} />}
    </Wrapper>
  );
};

export default CustomButtons;
