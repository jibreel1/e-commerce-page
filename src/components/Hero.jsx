import React from "react";
import { Stack } from "@mui/material";

import HeroImages from "./HeroImages";
import HeroInfo from "./HeroInfo";

const Hero = ({
   count,
   setCount,
   showLightBox,
   setShowLightBox,
   showBigImg,
   setShowBigImg,
   images,
   cartItems,
   setCartItems,
}) => {
   return (
      <Stack
         position="relative"
         sx={{
            mx: { xs: "0", sm: "60px", md: "100px", lg: "150px" },
            mt: { xs: "0", sm: "30px", md: "90px" },
            mb: "50px",
            display: { xs: "block", sm: "flex" },
            alignItems: { sm: "center", lg: "start" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "30px" },
         }}
      >
         <HeroImages
            showBigImg={showBigImg}
            setShowBigImg={setShowBigImg}
            showLightBox={showLightBox}
            setShowLightBox={setShowLightBox}
            images={images}
         />
         <HeroInfo
            count={count}
            setCount={setCount}
            cartItems={cartItems}
            setCartItems={setCartItems}
         />
      </Stack>
   );
};

export default Hero;
