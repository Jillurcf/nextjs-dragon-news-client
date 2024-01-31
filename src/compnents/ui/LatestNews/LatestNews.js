import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
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
              <Typography gutterBottom variant="h5" component="div">
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

        <Grid className="mt-12" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Card sx={{}}>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} alt="top news" width={800} />
                </CardMedia>
                <Box className="px-4">
                  <p className="px-2 w-[110px] bg-red-500 text-white my-4 rounded-lg">
                    Technology
                  </p>
                </Box>
                <CardContent>
                  <Typography gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, sed.
                  </Typography>
                  <Typography gutterBottom>By Jillur Rahman</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{}}>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} alt="top news" width={800} />
                </CardMedia>
                <Box className="px-4">
                  <p className="px-2 w-[110px] bg-red-500 text-white my-4 rounded-lg">
                    Technology
                  </p>
                </Box>
                <CardContent>
                  <Typography gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, sed.
                  </Typography>
                  <Typography gutterBottom>By Jillur Rahman</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{}}>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} alt="top news" width={800} />
                </CardMedia>
                <Box className="px-4">
                  <p className="px-2 w-[110px] bg-red-500 text-white my-4 rounded-lg">
                    Technology
                  </p>
                </Box>
                <CardContent>
                  <Typography gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, sed.
                  </Typography>
                  <Typography gutterBottom>By Jillur Rahman</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{}}>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} alt="top news" width={800} />
                </CardMedia>
                <Box className="px-4">
                  <p className="px-2 w-[110px] bg-red-500 text-white my-4 rounded-lg">
                    Technology
                  </p>
                </Box>
                <CardContent>
                  <Typography gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, sed.
                  </Typography>
                  <Typography gutterBottom>By Jillur Rahman</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;
