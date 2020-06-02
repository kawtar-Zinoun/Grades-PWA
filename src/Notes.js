import React from 'react';
import './stylesheet1.css'
import './stylesheet3.css'
import MenuProvider from 'react-flexible-sliding-menu';
import MenuContainer from './MenuContainer'
import Menu from './WelcomePageX'
//import axios from 'axios';
 class Notes extends React.Component{
  
    constructor(props) {
        super(props)
        this.state = {
         
            email: localStorage.getItem("email"),
            Notes: [],
            NotesModule1: [],
            NotesModule2: [],
            NotesModule3: [],
            NotesModule4: [],
            isLoaded: false,
          }
          this.SendToAPI();
          this.callApi();
          
      }
      notes;
      NotesG = [];
     async callApi(){
      await fetch("https://4b4a431b8533.ngrok.io/testAPI")
      .then(res => res.json())
       .then(res => this.notes = res)
         .catch(err => err);
       console.log(this.notes);
         await  this.getNotes();
    
     }
    
    async SendToAPI() {
      try{
       fetch('https://4b4a431b8533.ngrok.io/testAPI', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.state.email,
          })
        })
    }
    catch(e) {console.log(e)}
    };
    async getNotes() {
      await this.notes.NotesGenerales.forEach(note => {
       this.setState({Notes : [...this.state.Notes, note] })
      });
      await this.notes.NotesModule1.forEach(note => {
        this.setState({NotesModule1 : [...this.state.NotesModule1, note] })
    });
      await this.notes.notesModule2.forEach(note => {
      this.setState({NotesModule2 : [...this.state.NotesModule2, note] })
  });
      await this.notes.notesModule3.forEach(note => {
    this.setState({NotesModule3 : [...this.state.NotesModule3, note] })
});
      await this.notes.notesModule4.forEach(note => {
  this.setState({NotesModule4 : [...this.state.NotesModule4, note] })
});
  }

render() {

let dataC = this.state.Notes;
    return(
       
        <MenuProvider MenuComponent={MenuContainer} direction = 'left' animation = 'slide' >
        <div id= "container">
           <div className= "header">
        <nav id = 'nav'> <img src="./logo.jpg" alt="logo" /> <div className="text">Est-Notes  </div>
        <div style = {{float: 'right' , marginTop:'-28px' }}>
        <Menu /> 
        </div> 
         </nav>
               
            </div>
            <h2 className="header2"> Notes </h2>
           
            <div className= "mytable"> 
            <table style={{width:'95%'}}>
              <thead>
  <tr>

    <th>Module/Matière</th>
    <th style={{textAlign : 'left'}}>Note</th>
    <th>Résultat</th>
  </tr>
  </thead>
  <tbody>
  <tr className = "modules">
    <td>M5</td>
    <td>{this.state.Notes[0]}</td>
    <td style={{textAlign : 'center'}}>R</td>
  </tr>
 
  <tr>
    <td>Méthodes Numériques Ecrit</td>
    <td>{this.state.NotesModule1[0]}</td>
    <td></td>
  </tr>
  <tr>
    <td>Méthodes Numériques TP</td>
    <td>{this.state.NotesModule1[1]}</td>
     <td></td>
  </tr>
  <tr>
    <td>Probabilités et statistiques</td>
    <td>{this.state.NotesModule1[2]}</td>
    <td></td>
  </tr>
  <tr className = "modules">
    <td>M6</td>
    <td>{this.state.Notes[1]}</td>
    <td style={{textAlign : 'center'}} >V</td>
  </tr>
  <tr>
    <td>Structures de données Ecrit</td>
    <td>{this.state.NotesModule2[0]}</td>
    <td></td>
  </tr>
  <tr>
    <td>Structures de données TP</td>
    <td>{this.state.NotesModule2[1]}</td>
    <td></td>
  </tr>

  <tr>
    <td>  Initiation Programmation objet Ecrit </td>
    <td>{this.state.NotesModule2[2]}</td>
    <td></td>
  </tr>
  <tr>
    <td>  Initiation Programmation objet TP </td>
    <td>{this.state.NotesModule2[3]}</td>
    <td></td>
  </tr>
  <tr className = "modules">
    <td>M7</td>
    <td>{this.state.Notes[2]}</td>
    <td style={{textAlign : 'center'}}>V</td>
  </tr>
  <tr>
    <td>Programmation Web Ecrit</td>
    <td>{this.state.NotesModule3[0]}</td>
    <td></td>
  </tr>
  <tr>
    <td>Programmation Web TP</td>
    <td>{this.state.NotesModule3[1]}</td>
    <td></td>
  </tr>
  <tr>
    <td>Environnement dévelopement Web Ecrit</td>
    <td>{this.state.NotesModule3[2]}</td>
    <td></td>
  </tr>
  <tr>
    <td>Environnement dévelopement Web TP</td>
    <td>{this.state.NotesModule3[3]}</td>
    <td></td>
  </tr>
  <tr>
    <td>Initiation Réseaux Ecrit</td>
    <td>{this.state.NotesModule3[4]}</td>
    <td></td>
  </tr>
  <tr>
    <td>Initiation Réseaux TP</td>
    <td>{this.state.NotesModule3[5]}</td>
    <td></td>
  </tr>
  <tr className = "modules">
    <td>M8</td>
    <td>{this.state.Notes[3]}</td>
    <td style={{textAlign : 'center'}}>R</td>
  </tr>
  <tr>
    <td>Systèmes d'information Ecrit</td>
    <td>{this.state.NotesModule4[0]}</td>
    <td></td>
  </tr>
  <tr>
    <td>Bases de données Ecrit</td>
    <td>{this.state.NotesModule4[1]}</td>
    <td></td>
  </tr>
  <tr>
    <td>Bases de données TP</td>
    <td>{this.state.NotesModule4[2]}</td>
    <td></td>
  </tr>
  </tbody>
</table>

</div> 
            </div>
            </MenuProvider> 
            

    );
}
}

export default Notes;