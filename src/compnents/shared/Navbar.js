"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton, Stack } from "@mui/material";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import Header from "./Header";

const NavItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/category",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "About",
    pathname: "/about",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

const NavBar = () => {
  return (
  <>
  <Header></Header>
    <AppBar position="static" className="bg-black">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100} alt="logo" />

          <Box className="w-full text-center" >
            {NavItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">
                {item.route}
              </Button>
            </Link>
            ))}
          </Box>
          <Box>
            <Stack direction="row" sx={{
              "& svg": {
                color: "white"
              }
            }} >
            <IconButton className="gap-4">
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <TwitterIcon />
            </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </>
  );
};
export default NavBar;
