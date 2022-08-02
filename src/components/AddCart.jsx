import React from "react";
import { Box, Typography } from "@mui/material";

import Thumbnail from "../assets/image-product-1-thumbnail.jpg";
import Delete from "../assets/icon-delete.svg";

const AddCart = ({ count, onRemove, index }) => {
   return (
      <Box
         p="25px"
         display="flex"
         alignItems="center"
         justifyContent="space-between"
         gap="10px"
      >
         <img src={Thumbnail} alt="img1" className="thumbnail" />
         <div>
            <Typography
               color="hsl(219, 9%, 45%)"
               fontWeight="400"
               fontSize="16px"
            >
               Fall Limited Edition Sneakers
            </Typography>
            <Typography
               color="hsl(219, 9%, 45%)"
               fontWeight="400"
               fontSize="16px"
            >
               $125.00 x {count}
               <Typography
                  component="span"
                  fontWeight="700"
                  color="hsl(220, 13%, 13%)"
                  ml={1}
               >
                  ${125.0 * count}
               </Typography>
            </Typography>
         </div>
         <img
            src={Delete}
            alt="delete"
            style={{ cursor: "pointer" }}
            onClick={() => {
               onRemove(index);
            }}
         />
      </Box>
   );
};

export default AddCart;
