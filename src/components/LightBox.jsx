import React from "react";
import { Box } from "@mui/material";
// import { Close } from "@mui/icons-material";
import HeroImages from "./HeroImages";

import Prev from "../assets/icon-previous.svg";
import Next from "../assets/icon-next.svg";
import CloseWhite from "../assets/icon-close-white.svg";

const LightBox = ({ showBigImg, setShowBigImg, close, images }) => {
   return (
      <Box
         position="absolute"
         top="0"
         left="0"
         bottom="-70px"
         right="0"
         zIndex="8"
         sx={{
            bgcolor: "hsla(0, 0%, 0%, 0.75)",
            display: { xs: "none", md: "block" },
         }}
      >
         <Box
            position="relative"
            display="grid"
            placeItems="center"
            alignItems="center"
            justifyContent="center"
            mt="80px"
         >
            <Box className="closeBox" onClick={close}>
               <img src={CloseWhite} alt="close" className="img-closeBox" />
            </Box>
            <Box
               className="arrow prevBox"
               sx={{ display: "flex" }}
               onClick={() => {
                  showBigImg > 0 && setShowBigImg(showBigImg - 1);
               }}
            >
               <img src={Prev} alt="prev" />
            </Box>
            <HeroImages showBigImg={showBigImg} setShowBigImg={setShowBigImg} />
            <Box
               className="arrow nextBox"
               sx={{ display: "flex" }}
               onClick={() => {
                  showBigImg < images.length - 1 &&
                     setShowBigImg(showBigImg + 1);
               }}
            >
               <img src={Next} alt="next" />
            </Box>
         </Box>
      </Box>
   );
};

export default LightBox;
