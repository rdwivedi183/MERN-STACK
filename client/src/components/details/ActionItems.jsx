import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/cartAction";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',

  [theme.breakpoints.down("lg")]: {
    padding: '20px 40px',
  },

}));

const Image = styled("img")({
  width: "95%",
  padding: "15px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: '48%',
  height: '50px',
  borderRadius: '2px',
  
  [theme.breakpoints.down("lg")]: {
    width: '46%',
  },
  [theme.breakpoints.down("sm")]: {
    width: '48%',
  },

}));



const ActionItems = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;
  const [quantity, stQuantity] = useState(1);

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/cart');
  }

  return (
    <LeftContainer>
      <Box
        style={{ padding: "15px", border: "1px solid #f0f0f0", width: "90%" }}
      >
        <Image src={product.url} alt="..." />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
       onClick={() => addItemToCart()}
      >
        {" "}
        <Cart /> Add to Cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb541b" }}>
        {" "}
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItems;
