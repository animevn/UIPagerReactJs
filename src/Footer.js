import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

function Footer() {

  const Copyright = ()=>{
    return (
      <Box align="center">
        <Box>
         <Typography variant="body1">
           Copyright ©
           <Link color="inherit" href="#">
             UIPageviews
           </Link>
           {" " + new Date().getFullYear()}.
         </Typography>
        </Box>

        <Box fontStyle="italic" my={0.5}>
          <Typography variant="body2">
            From
            <span role="img" aria-label=""> 👨</span> with
            <span role="img" aria-label=""> ❤️</span>
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Copyright />
  );
}

export default Footer;
