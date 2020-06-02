
import React from 'react';
import {withRouter} from 'react-router-dom'
import './stylesheet2.css'
import './stylesheet1.css'
import MenuProvider from 'react-flexible-sliding-menu';
import MenuContainer from './MenuContainer'
import Menu from './WelcomePageX'

const  WelcomePage = () => {

    const user = localStorage.getItem("user")
    const image = localStorage.getItem("image")
    
    return (
       
        <MenuProvider MenuComponent={MenuContainer} direction = 'left' animation = 'slide' >
      <div id= "container">
         <div class= "header">
      <nav id = 'nav'> <img src="./logo.jpg" alt="logo" /> <div class="text">Est-Notes </div>
      <div style = {{float: 'right' , marginTop:'-28px' }}>
      <Menu />
      </div>
       </nav>
                      
          </div>
        
            <div  className="formX">
            <div style={{background : `url(${image})`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat'}}  className= "theBefore"></div> 
    <h2> Bienvenue </h2>
    <h2 style = {{color: '#0f4c75'}}>{user} </h2>
    
        <button className= "cardx"> Voir les Notes </button>
        <button className= "card2"> Rattrapages </button>

    </div>
    </div>
    </MenuProvider>
   
    );
  
}




export default withRouter(WelcomePage);