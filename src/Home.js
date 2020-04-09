import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {useTheme, makeStyles} from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import SwipeableViews from "react-swipeable-views";
// import {autoPlay} from "react-swipeable-views-utils";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

//this is for autoplay slide
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const imgList = [
  "/images/image1.webp", "/images/image2.webp", "/images/image3.webp", "/images/image4.webp",
  "/images/image5.webp", "/images/image6.webp", "/images/image7.webp", "/images/image8.webp",
  "/images/image9.webp"
];
const width = {xs:12, sm:12, md:12, lg:10, xl:9};
// const padding = {xs:3, sm:3, md:3, lg:0, xl:0};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxWidth: "auto",
    overflow: 'hidden',
    width: '100%',
    maxHeight: "60vh",
    objectFit: "cover"
  },
}));


function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [active, setActive] = useState(0);
  const max = imgList.length;

  const handleNext = ()=>{
    setActive(old=>old + 1);
  };

  const handleBack = ()=>{
    setActive(old=>old - 1);
  };

  const handleChange = (value)=>{
    setActive(value);
  };

  //make object fit to div with object-fit:cover
  const imageBoxes = (
    imgList.map(value=>(
      <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center"
        key={value} width={1}>
        <img src={value} alt={value} className={classes.img}
             />
      </Box>
    ))
  );


  return (
    <Grid container direction="row" justify="center">
      <Grid item {...width}>
        <Box boxShadow={3} mx={5} mt={5}
             borderRadius={10} style={{"overflow":"hidden"}}>
          <Paper square elevation={0}>
            <Typography component="div">
              <Box textAlign="center" p={1}>
                {`Img ${active + 1}`}
              </Box>
            </Typography>
          </Paper>
          <Box>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={active}
              onChangeIndex={handleChange}
              enableMouseEvents>
              {imageBoxes}
            </SwipeableViews>
          </Box>

          <MobileStepper
            position="static" activeStep={active} style={{"backgroundColor":"white"}}
            backButton={
              <Button size="small" onClick={handleBack} disabled={active === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
            nextButton={
              <Button size="small" onClick={handleNext} disabled={active === max - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            steps={max} />

        </Box>



      </Grid>
    </Grid>
  )
}

export default Home;