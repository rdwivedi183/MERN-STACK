import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const StyledHeader = styled(AppBar)`
  background: #28740;
  height: 55px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0%;
  text-decoration: none;
  color: inherit;
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

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subLogo =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = () => {
    <Box style={{ width: 200 }} onCLick={handleClose}>
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>;
  };

  return (
    <>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
          <MenuButton color="inherit" onClick={handleOpen}>
            <MenuIcon />
          </MenuButton>

          <Drawer open={open} close={handleClose}>
            {list()}
          </Drawer>

          <Component to="/">
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
