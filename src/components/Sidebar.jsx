import { Stack, Box, Typography } from "@mui/material";
import Close from "../assets/icon-close.svg";

const Sidebar = ({ close, links, showMenu }) => {
   return (
      <Box
         className={`sidebar ${showMenu === true ? "left" : ""}`}
         sx={{ display: { xs: "block", sm: "none" } }}
      >
         <Box
            position="absolute"
            top="0"
            width="260px"
            bottom="0"
            sx={{
               bgcolor: "#fff",
            }}
         >
            <Box className="close" onClick={close}>
               <img src={Close} alt="close" />
            </Box>
            <Stack mt="95px" gap="25px" ml="25px">
               {links.map((link, index) => (
                  <Typography key={index}>
                     <a href="!#" onClick={close} className="side-links">
                        {link}
                     </a>
                  </Typography>
               ))}
            </Stack>
         </Box>
      </Box>
   );
};

// const SideDrops = { Sidebar, DropDown };

export default Sidebar;
