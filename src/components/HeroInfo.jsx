import React from "react";
import { Stack, Typography, Box } from "@mui/material";

// import AddCart from "./AddCart";

import Minus from "../assets/icon-minus.svg";
import Plus from "../assets/icon-plus.svg";
import CartWhite from "../assets/icon-cart-white.svg";

const HeroInfo = ({ count, setCount, cartItems, setCartItems }) => {
   const handleAddCart = () => {
      if (count > 0) {
         setCartItems([cartItems]);
         console.log(cartItems);
      }
   };

   return (
      <Stack
         sx={{
            mx: { xs: "25px", sm: "auto" },
            my: { xs: "30px", sm: "auto" },
            width: { sm: "450px" },
         }}
      >
         <Box sx={{}}>
            <Typography
               component="p"
               fontWeight="bold"
               textTransform="uppercase"
               color="hsl(26, 100%, 55%)"
               fontSize="14px"
               letterSpacing="1.2px"
            >
               Sneaker Company
            </Typography>
            <Typography
               component="h2"
               fontWeight="700"
               textTransform="capitalize"
               color="hsl(220, 13%, 13%)"
               letterSpacing="1.1px"
               sx={{
                  fontSize: { xs: "24px", sm: "34px" },
                  pt: { xs: "10px", md: "20px" },
                  pb: { xs: "25px", md: "35px" },
               }}
            >
               Fall Limited Edition Sneakers
            </Typography>
            <Typography
               component="p"
               color="hsl(219, 9%, 45%)"
               letterSpacing="1px"
               lineHeight="1.6"
            >
               These low-profile sneakers are your perfect casual wear
               companion. Featuring a durable rubber outer sole, they’ll
               withstand everything the weather can offer.
            </Typography>
         </Box>
         <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ display: { xs: "flex", sm: "block" }, my: "30px" }}
         >
            <Typography
               component="h2"
               fontWeight="700"
               color="hsl(220, 13%, 13%)"
               letterSpacing="1px"
               sx={{
                  fontSize: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
               }}
            >
               $125.00
               <Typography
                  variant="span"
                  letterSpacing="1px"
                  sx={{
                     fontSize: "14px",
                     p: "5px",
                     bgcolor: "hsl(25, 100%, 94%)",
                     color: "hsl(26, 100%, 55%)",
                     borderRadius: "5px",
                  }}
               >
                  50%
               </Typography>
            </Typography>
            <Typography
               component="p"
               letterSpacing="1px"
               sx={{
                  fontSize: "14px",
                  color: "hsl(220, 14%, 75%)",
                  textDecoration: "line-through",
               }}
            >
               $250.00
            </Typography>
         </Box>
         <Box
            display="flex"
            justifyContent="space-between"
            gap="25px"
            sx={{ flexDirection: { xs: "column", lg: "row" } }}
         >
            <Box
               flex="1"
               display="flex"
               alignItems="center"
               justifyContent="space-between"
               p="20px"
               bgcolor="hsl(223, 64%, 98%)"
               borderRadius="10px"
            >
               <Box
                  className="math"
                  onClick={() => {
                     count > 0 && setCount(count - 1);
                  }}
               >
                  <img src={Minus} alt="minus" />
               </Box>
               <Typography
                  fontWeight="700"
                  color="hsl(220, 13%, 13%)"
                  fontSize="20px"
               >
                  {count}
               </Typography>
               <Box
                  className="math"
                  onClick={() => {
                     setCount(count + 1);
                  }}
               >
                  <img src={Plus} alt="plus" />
               </Box>
            </Box>

            <Box
               flex="2"
               display="flex"
               alignItems="center"
               justifyContent="center"
               bgcolor="hsl(26, 100%, 55%)"
               borderRadius="10px"
               p="20px"
               gap="20px"
               boxShadow="0 30px 30px hsl(25, 100%, 94%)"
               sx={{ cursor: "pointer" }}
               onClick={handleAddCart}
            >
               <img src={CartWhite} alt="cart" />
               <Typography
                  color="#fff"
                  fontWeight="700"
                  letterSpacing="1.2px"
                  fontSize="18px"
               >
                  Add to Cart
               </Typography>
            </Box>
         </Box>
      </Stack>
   );
};

export default HeroInfo;
