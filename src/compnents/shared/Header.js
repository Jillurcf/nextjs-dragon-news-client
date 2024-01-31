import { Box, Container, Typography } from "@mui/material";
import headingImg from "@/assets/The-Dragon-News.png";
import Image from "next/image";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full my-5">
      <Container>
        <Image className="mx-auto" src={headingImg} alt="image" height={500} width={500} />
        <Typography variant="body2" color="gray" textAlign="center" className="my-2">
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign="center">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
