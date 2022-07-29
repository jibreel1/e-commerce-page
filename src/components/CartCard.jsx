import React from "react";
import { Box, Typography } from "@mui/material";

import AddCart from "./AddCart";

const CartCard = ({ count, setCount, cartItems, setCartItems }) => {
   const onRemove = () => {
      const arr = cartItems.shift();
      setCartItems(arr);
      setCount(0);
   };
   return (
      <Box
         className="cart"
         sx={{
            width: { xs: "100%", sm: "370px" },
            height: "270px",
            borderRadius: "10px",
         }}
      >
         <Typography fontWeight="700" pt="25px" pl="25px" pb="25px">
            Cart
         </Typography>
         <Box
            sx={{
               borderTop: "1px solid hsl(220, 14%, 75%)",
            }}
         >
            {cartItems.length === 0 && (
               <Typography
                  display="flex"
                  justifyContent="center"
                  fontWeight="700"
                  color="hsl(219, 9%, 45%)"
                  mt="50px"
               >
                  Your cart is empty
               </Typography>
            )}
            {cartItems.map(index => (
               <AddCart key={index} count={count} onRemove={onRemove} />
            ))}
            {cartItems.length > 0 && count > 0 && (
               <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bgcolor="hsl(26, 100%, 55%)"
                  borderRadius="10px"
                  p="20px"
                  mx="25px"
                  sx={{ cursor: "pointer" }}
               >
                  <Typography
                     color="#fff"
                     fontWeight="700"
                     letterSpacing="1.2px"
                     fontSize="18px"
                  >
                     Checkout
                  </Typography>
               </Box>
            )}
         </Box>
      </Box>
   );
};

export default CartCard;
