import React, { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

// components
import LoginDialog from '../login/LoginDialog';

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 40px;
  align-items: center;
  & > button,
  & > p,
  & > div {
    margin-right: 60px;
    fonnt-size: 12px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874fe;
  background: #FFFFFF;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;

`;

const CustomButtons = () => {
  const[open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true)
  }


  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={() => handleOpenDialog()}>Login</LoginButton>
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
