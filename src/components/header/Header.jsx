import React from "react";
import { AppBar, Toolbar, Typography, styled, Box } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  background: #28740;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0%;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlushImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});
const CustomButtonWrapper = styled(Box)`
    margin 0 5% 0 auto;
`;

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subLogo =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <>
      <StyledHeader>
        <Toolbar style={{minHeight:  55 }}>
          <Component>
            <img src={logoURL} alt="flip-cart-logo" style={{ width: 75 }} />
            <Box style={{ display: "flex" }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: `#FFE500` }}>
                  Plus
                </Box>
              </SubHeading>
              <PlushImage src={subLogo} alt="sub-logo" />
            </Box>
          </Component>
          <Search />
          <CustomButtonWrapper>
            <CustomButtons />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </>
  );
};

export default Header;
