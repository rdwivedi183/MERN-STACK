import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  height: 65vh;
  width: 80%;
  background: #fff;
  margin: 80px 14px;

`;

const Container = styled(Typography)`
  text-align: center;
  padding-top: 70px;
`;

const EmptyCart = () => {
  const emptyImgUrl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Component>
      <Container>
        <img scr={emptyImgUrl} alt="empty-img" style={{width: '15%' }}/>
        <Typography>Your cart is empty</Typography>
        <Typography>Add items to it now</Typography>
      </Container>
    </Component>
  );
};

export default EmptyCart;
