import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";

import Banner from "./Banner";
import NavBar from "./NavBar";

import { getProducts } from "../../redux/action/productAction";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for You" timer={false} />
        <Slide products={products} title="Suggesting Item"timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trnding offers" timer={false} />
        <Slide products={products} title="Season's top picks" timer={false} />
        <Slide products={products} title="Top Deals on Accessories" timer={false} />
      </Component>
    </>
  );
};

export default Home;
