import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/side-top-news.png"

const SideBar = () => {
    return (
        <Box className="my-5">
                 <Card sx={{}}>
          <CardActionArea>
            <CardMedia>
              <Image src={topNews} alt="top news" width={800} />
            </CardMedia>
            <Box className="px-4">
              <p className="px-2 w-[110px] bg-red-500 text-white my-4 rounded-lg">
                Technology
              </p>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="Box">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, sed.
              </Typography>
              <Typography gutterBottom>By Jillur Rahman</Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Box>
    );
};

export default SideBar;