/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Button from '@mui/material/Button'
import { Stack } from '@mui/material';
import fixed from "../data/fixed.json";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


// @ts-ignore
const Nav = ({ setMode, addItem, allITems }) => {

  const [setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();
  // @ts-ignore



  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Stack direction="row" gap={2} sx={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>



            {fixed.map((obj) => {

              return <Button key={obj.id} onClick={() => {
                addItem(obj)

              }} variant="contained" size="small" color="success">
                {obj.name}
              </Button>


            })

            }
          </Stack>


          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Shehab
          </Typography>

          <Stack>

            <Typography variant="body1" color="white" justifyContent={'right'} sx={{ ml: 50 }}>

              <ShoppingBasketIcon />

              {allITems.length==0? "Empty"
            : "" +
            allITems
              .map((each) => each.count).reduce((a, b) => a + b)}





            </Typography>

          </Stack>




          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, backgroundColor: "black" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312330/shehab/bannon-morrissy-RxiAV5LC-ww-unsplash_nf7xns.jpg"
                />
              </IconButton>
            </Tooltip>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
              }}
            >
              {theme.palette.mode == "light" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              dsd
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
