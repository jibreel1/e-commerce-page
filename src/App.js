import { useState } from "react";
import "./App.css";

// import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LightBox from "./components/LightBox";

import Img1 from "./assets/image-product-1.jpg";
import Img2 from "./assets/image-product-2.jpg";
import Img3 from "./assets/image-product-3.jpg";
import Img4 from "./assets/image-product-4.jpg";

const App = () => {
   const [count, setCount] = useState(0);
   const [showLightBox, setShowLightBox] = useState(false);
   const [showBigImg, setShowBigImg] = useState(0);
   const [cartItems, setCartItems] = useState([]);

   const images = [Img1, Img2, Img3, Img4];

   const closeLightBox = () => {
      setShowLightBox(false);
   };

   return (
      <div onClick={() => {}}>
         <Navbar
            count={count}
            cartItems={cartItems}
            setCartItems={setCartItems}
         />
         <Hero
            count={count}
            setCount={setCount}
            showBigImg={showBigImg}
            setShowBigImg={setShowBigImg}
            showLightBox={showLightBox}
            setShowLightBox={setShowLightBox}
            images={images}
            cartItems={cartItems}
            setCartItems={setCartItems}
         />
         {showLightBox && (
            <LightBox
               showBigImg={showBigImg}
               setShowBigImg={setShowBigImg}
               close={closeLightBox}
               images={images}
            />
         )}
      </div>
   );
};

export default App;
