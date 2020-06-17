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
            NotesF: [],
            Matieres: [],
            fullyFetched: false,
          }
          
      }
      notes;
     async callApi(){
      await fetch(" https://d0b3356ce275.ngrok.io/testAPI")
      .then(res => res.json())
       .then(res => this.notes = res)
         .catch(err => err);
         await  this.getNotes();
          this.checkRatt();
         this.checkRattMatieres();
         this.setState({fullyFetched: true});
     }

    
    async SendToAPI() {
      try{
       fetch(' https://d0b3356ce275.ngrok.io/testAPI', {
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
    currentRatt = [];
    UserRattMatieres = [];
    async getNotes() {
      await this.notes.Modules.forEach(note => {
        this.setState({Matieres : [...this.state.Matieres, note] })
       });
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
      await this.notes.notesF.forEach(note => {
  this.setState({NotesF : [...this.state.NotesF, note] })
     
});
//await localStorage.setItem('NOTES',this.state.NotesF);
  }
     checkRatt(){ 
       var i = 1;
      this.state.NotesF.forEach(note => {
        if(note === "R"){
          this.currentRatt.push("M" + i );
          i++;
        }
        else { i++}
      });
      localStorage.setItem('UserRatt', this.currentRatt);
    }
   checkRattMatieres(){
     const md = this.state.NotesModule1.concat(this.state.NotesModule2, this.state.NotesModule3, 
      this.state.NotesModule4);
       var self = this;
       md.forEach(function getItem(note, index) {
        if (parseInt(note) < 12)  {
       self.UserRattMatieres.push(self.state.Matieres[index]);
     
        }
       
      });
      localStorage.setItem('RattMatieres', JSON.stringify(this.UserRattMatieres));
    
  }
  componentDidMount() {
    this.SendToAPI();
    this.callApi();
    
}
render() {

    return(
       
        <MenuProvider MenuComponent={MenuContainer} direction = 'left' animation = 'slide' >
        <div id= "container">
           <div className= "my-header">
        <nav id = 'nav'> <img src="./logo.jpg" alt="logo" /> <div className="text">Est-Notes  </div>
        <div style = {{float: 'right' , marginTop:'-28px' }}>
        <Menu /> 
        </div> 
         </nav>
               
            </div>
            <h2 className="my-header2"> Notes </h2>
           
            <div className= "mytable"> 
            <table style={{width:'95%', height: '90%'}}>
              <thead>
  <tr>

    <th>Module/Matière</th>
    <th style={{textAlign : 'left'}}>Note</th>
   
  </tr>
  </thead>
  <tbody>
  <tr className = "modules" style = {{ backgroundColor: this.state.fullyFetched && this.state.NotesF[0] === "R" ? "#fd5e53" : "lightblue"}}> 
    <td>M5</td>
    <td>{this.state.Notes[0]}</td>
  </tr>

  <tr>
    <td>{this.state.Matieres[0]}</td>
    <td>{this.state.NotesModule1[0]}</td>
  
  </tr>
  <tr>
    <td>{this.state.Matieres[1]}</td>
    <td>{this.state.NotesModule1[1]}</td>
    
  </tr>
  <tr>
    <td>{this.state.Matieres[2]}</td>
    <td>{this.state.NotesModule1[2]}</td>
   
  </tr>
  <tr className = "modules" style = {{ backgroundColor: this.state.fullyFetched && this.state.NotesF[1] === "R" ? "#fd5e53" : "lightblue"}}>
    <td>M6</td>
    <td>{this.state.Notes[1]}</td>
    
  </tr>
  <tr>
    <td>{this.state.Matieres[3]}</td>
    <td>{this.state.NotesModule2[0]}</td>
   
  </tr>
  <tr>
    <td>{this.state.Matieres[4]} </td>
    <td>{this.state.NotesModule2[1]}</td>
  
  </tr>

  <tr>
    <td>  {this.state.Matieres[5]} </td>
    <td>{this.state.NotesModule2[2]}</td>
    
  </tr>
  <tr>
    <td>   {this.state.Matieres[6]} </td>
    <td>{this.state.NotesModule2[3]}</td>
 
  </tr>
  <tr className = "modules" style = {{ backgroundColor: this.state.fullyFetched && this.state.NotesF[2] === "R" ? "#fd5e53" : "lightblue"}}>
    <td>M7</td>
    <td>{this.state.Notes[2]}</td>
    
  </tr>
  <tr>
    <td> {this.state.Matieres[7]}</td>
    <td>{this.state.NotesModule3[0]}</td>
   
  </tr>
  <tr>
    <td> {this.state.Matieres[8]}</td>
    <td>{this.state.NotesModule3[1]}</td>

  </tr>
  <tr>
    <td> {this.state.Matieres[9]}</td>
    <td>{this.state.NotesModule3[2]}</td>
  
  </tr>
  <tr>
    <td> {this.state.Matieres[10]} </td>
    <td>{this.state.NotesModule3[3]}</td>
 
  </tr>
  <tr>
    <td> {this.state.Matieres[11]}</td>
    <td>{this.state.NotesModule3[4]}</td>
   
  </tr>
  <tr>
    <td> {this.state.Matieres[12]} </td>
    <td>{this.state.NotesModule3[5]}</td>
   
  </tr>
  <tr className = "modules" style = {{ backgroundColor: this.state.fullyFetched && this.state.NotesF[3] === "R" ? "#fd5e53" : "lightblue"}}>
    <td>M8</td>
    <td>{this.state.Notes[3]}</td>
   
  </tr>
  <tr>
    <td> {this.state.Matieres[13]}</td>
    <td>{this.state.NotesModule4[0]}</td>
  
  </tr>
  <tr>
    <td>{this.state.Matieres[14]}</td>
    <td>{this.state.NotesModule4[1]}</td>
  
  </tr>
  <tr>
    <td>{this.state.Matieres[15]}</td>
    <td>{this.state.NotesModule4[2]}</td>
 
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