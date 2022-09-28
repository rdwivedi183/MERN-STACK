import { Box, Typography, Button, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addEllipsis } from "../../utils/common-utils";
import GroupButton from "./GroupButton";
import { removeFromCart } from '../../redux/action/cartAction'

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  margin: 20px;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";


  const removeItemCart = (id) => {
    dispatch(removeFromCart(id))

  }  

  return (
    <Component>

      <LeftComponent>
        <img src={item.url} alt="product" style={{ height: 110, width: 110 }} />
        <GroupButton />
      </LeftComponent>
      
      <Box style={{margin: 20}}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          saller: RetailsNet
          <Box component="span">
            <img src={fassured} alt="flipKart" style={{ width: 50 }} />
          </Box>
        </SmallText>
        <Typography style={{ margin: "20 0" }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: 18}}>
            {" "}
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          <Box component="span" style={{ color: "#388E3C" }}>
            {item.price.discount}
          </Box>
        </Typography>
        <Remove onClick={() => removeItemCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItem;
