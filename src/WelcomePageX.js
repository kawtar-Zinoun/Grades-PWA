import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import './stylesheet2.css'
function Menu() {
  const { toggleMenu } = useContext(MenuContext);
  return (
   
     <img src="https://img.icons8.com/doodle/96/000000/menu.png"  
       onClick={toggleMenu}
        /> 
       
  );
}

export default Menu;
