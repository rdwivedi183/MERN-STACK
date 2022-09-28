import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/action/productAction";
import { Grid, styled } from "@mui/material";
import ActionItems from "./ActionItems";
import ProductDetails from './ProductDetails';


const Component = styled(Grid)(({ theme }) => ({
  background: '#f2f2f2',
  marginTop: '55px',

  [theme.breakpoints.down("md")]: {
    marginTop: 0,
  },

}));

const Container = styled(Grid)`
  background: #ffffff;
  margin-top: 55px;
`;

const RightContainer = styled(Grid)`
  margin-top: 50px;
`;

const DetailView = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container className="box-flex">
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItems product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8}>
            <ProductDetails product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
