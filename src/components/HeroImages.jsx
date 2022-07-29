import React from "react";
import { Box } from "@mui/material";

import Img1 from "../assets/image-product-1.jpg";
import Img2 from "../assets/image-product-2.jpg";
import Img3 from "../assets/image-product-3.jpg";
import Img4 from "../assets/image-product-4.jpg";

import Prev from "../assets/icon-previous.svg";
import Next from "../assets/icon-next.svg";

const HeroImages = ({ showBigImg, setShowBigImg, setShowLightBox }) => {
   const images = [Img1, Img2, Img3, Img4];
   return (
      <Box position="relative">
         <Box
            className="arrow prev"
            sx={{ display: { xs: "flex", sm: "none" } }}
            onClick={() => {
               showBigImg > 0 && setShowBigImg(showBigImg - 1);
            }}
         >
            <img src={Prev} alt="prev" />
         </Box>
         <img
            className="product-img"
            src={images[showBigImg]}
            alt="product 1"
            onClick={() => setShowLightBox(true)}
         />
         <Box
            className="arrow next"
            sx={{ display: { xs: "flex", sm: "none" } }}
            onClick={() => {
               showBigImg < images.length - 1 && setShowBigImg(showBigImg + 1);
            }}
         >
            <img src={Next} alt="next" />
         </Box>
         <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "30px" }}>
            {images.map((image, index) => (
               <div
                  key={index}
                  className={`${showBigImg === index ? "active-img" : ""}`}
               >
                  <img
                     src={image}
                     alt={image}
                     className={`little-img ${
                        showBigImg === index ? "active" : ""
                     }`}
                     onClick={() => {
                        setShowBigImg(index);
                     }}
                  />
               </div>
            ))}
         </Box>
      </Box>
   );
};

export default HeroImages;
