import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import GoogleLogin from 'react-google-login'
import './stylesheet1.css';
import {withRouter} from 'react-router-dom'

const responseGoogleFail = () => {
 alert('Veuillez reessayez');
}

 class Home extends React.Component {
    constructor(props) {  
    super(props)
    this.state = {
        isSignedIn: false,
        redirect: null,
        name: "",
        email:"",
        image: "",
    }
  };
  
 
 update = () => {
  this.props.history.push("/WelcomePage"); 

}
 responseGoogle = async(response) => {
  const token = response.tokenId;
   this.setState({name: response.profileObj.name, email : response.profileObj.email, 
    image : response.profileObj.imageUrl})
   localStorage.setItem('user',this.state.name);
   localStorage.setItem('email',this.state.email);
  localStorage.setItem('image',this.state.image);
  //localStorage.setItem('access_token',token)
  
  this.update();

}
getAccessToken = () => {localStorage.getItem('access_token')}
/* componentDidMount =() => {
  this.getAccessToken()
  if (this.getAccessToken){
    this.props.history.push("/WelcomePage"); 
  }
} */
render() {
  
    return (
      <div id="container">
         <div className= "my-header">
      <nav id = 'nav'> <img src="./logo_transparent.png" alt="logo" /> <div className="text">Est-Notes </div>
       
       </nav>
     
          </div>
      <h2 className="my-header2"> Connexion </h2>
     
      <div className="my-form">
        <span className= "textx"> 
        <img src="https://img.icons8.com/fluent/48/000000/login-rounded-right.png" style={{width: "10%"}}/>
        Connectez vous avec votre compte academique pour acceder 
          à Est-Notes.</span>
      
      
 
    </div>
    <div className="GoogleLog">  
      
      <GoogleLogin 
      className="my-btn"
    clientId="163359188878-hqpdvnamdh38a3gkhhq6jnl1rbmedcms.apps.googleusercontent.com" 
    scope= 'profile email'
    ux_mode=  'redirect'
    redirect_uri= 'https://www.abc.io/google_login_redirect'
    buttonText="Connexion avec Compte Academique"
    isSignedIn={true}
    onSuccess={this.responseGoogle}
    onFailure={responseGoogleFail}
    cookiePolicy={'single_host_origin'}
    theme= 'dark'
  />
  </div>
    <img src = "./drawkit-list-app-colour.svg" style= {{width:'80%', height: '70%',marginLeft:'20%',
    marginTop: '4px'
  }}/>
   
  
    </div>
    );
  
}
}
export default withRouter(Home);


