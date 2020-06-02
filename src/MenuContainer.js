import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { NavLink } from "react-router-dom";
import './stylesheet2.css'
import { HomeSVG, DashboardSVG} from "./svgs";
function MenuContainer() {
  const { closeMenu } = useContext(MenuContext);
  return (
    <div className="Menu">
        <button onClick={closeMenu} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <h1 style = {{color: 'white'}}>Menu</h1>
      <nav onClick={closeMenu}>
        <NavLink exact to="/WelcomePage">
        <HomeSVG />
          <span>Accueil</span>
        </NavLink>
        
        <NavLink to="/Notes">
        <DashboardSVG />
          <span>Notes</span>
        </NavLink>
        <NavLink to="/Rattrapages">
        <DashboardSVG />
          <span>Rattrapages</span>
        </NavLink>
        <NavLink to="Notes">
        
          <span>Se deconnecter</span>
        </NavLink>

      </nav>
      
      
    </div>
  );
}

export default MenuContainer;
