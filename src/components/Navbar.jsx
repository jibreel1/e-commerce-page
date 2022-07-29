import { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";

import Sidebar from "./Sidebar";
import CartCard from "./CartCard";

import Logo from "../assets/logo.svg";
import Menu from "../assets/icon-menu.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";

const Navbar = ({ count, cartItems, setCartItems }) => {
   const [showSidebar, setShowSidebar] = useState(false);
   const [showCart, setShowCart] = useState(false);

   const links = ["Collections", "Men", "Women", "About", "Contacts"];

   const close = () => {
      setShowSidebar(false);
   };
   return (
      <Stack
         position="relative"
         direction="row"
         height="70px"
         alignItems="center"
         justifyContent="space-between"
         sx={{
            mx: { xs: "25px", sm: "60px", md: "100px", lg: "150px" },
            borderBottom: { xs: "none", sm: "1px solid hsl(220, 14%, 75%)" },
         }}
      >
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               gap: { xs: "15px", sm: "15px", md: "30px", lg: "60px" },
            }}
         >
            <img
               className="menu"
               src={Menu}
               alt="menu"
               onClick={() => {
                  setShowSidebar(true);
               }}
            />
            <img className="logo" src={Logo} alt="logo" />
            <Box
               sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  alignItems: "center",
                  gap: { sm: "10px", md: "20px", lg: "30px" },
               }}
            >
               {links.map((link, index) => (
                  <Typography key={index}>
                     <a href="!#" className="nav-links">
                        {link}
                     </a>
                  </Typography>
               ))}
            </Box>
         </Box>
         <Box
            sx={{ position: "relative", display: "flex", alignItems: "center" }}
         >
            <Box
               position="absolute"
               color="#fff"
               bgcolor="hsl(26, 100%, 55%)"
               borderRadius="10px"
               p="0 4px"
               top="0"
               right="35px"
               sx={{ display: count === 0 ? "none" : "" }}
            >
               <Typography fontSize="12px">{count}</Typography>
            </Box>
            <img
               src={Cart}
               alt="cart"
               style={{ marginRight: "15px", cursor: "pointer" }}
               onClick={() => {
                  setShowCart(!showCart);
               }}
            />
            <Box
               className={`avatar ${showCart === true ? "border" : ""}`}
               sx={{ display: "flex", alignItems: "center" }}
            >
               <img
                  src={Avatar}
                  alt="avatar"
                  style={{ width: "25px", cursor: "pointer" }}
               />
            </Box>
         </Box>
         {showCart && (
            <CartCard
               count={count}
               cartItems={cartItems}
               setCartItems={setCartItems}
            />
         )}
         <Sidebar close={close} links={links} showMenu={showSidebar} />
      </Stack>
   );
};

export default Navbar;
