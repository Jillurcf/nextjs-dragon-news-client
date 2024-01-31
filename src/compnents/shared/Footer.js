import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { Container } from "postcss";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
// import Link from "next/link";
const Footer = () => {
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
  return (
    <Box className="bg-black px-2 py-10">
      {/* <Container> */}
        <Box className="width-full text-center"  sx={{
              "& svg": {
                color: "white",
              },
            }}>
         
            <IconButton className="gap-4">
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <TwitterIcon />
            </IconButton>
       
        </Box>
        <Box className="w-full text-center" >
            {NavItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">
                {item.route}
              </Button>
            </Link>
            ))}
          </Box>
          <Typography variant="body2" color="gray" textAlign="center">
            @2023 The dragon news design by Jillur
          </Typography>
      {/* </Container> */}
    </Box>
  );
};

export default Footer;
