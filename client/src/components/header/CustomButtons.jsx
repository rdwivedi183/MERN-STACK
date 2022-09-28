import React, { useState, useContext } from "react";
import { Box, Button, Typography, styled, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";

// components
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: 'inherit',

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
  const { cartItems } = useSelector(state => state.cart)
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
      
      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
        <ShoppingCart />
        </Badge>
        <Typography style={{marginLeft: 5}}>Cart</Typography>
      </Container>
      {open && <LoginDialog open={open} setOpen={setOpen} />}
    </Wrapper>
  );
};

export default CustomButtons;
