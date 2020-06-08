import React from 'react';
import MenuProvider from 'react-flexible-sliding-menu';
import MenuContainer from './MenuContainer'
import Menu from './WelcomePageX'
import moment from 'moment'
import 'moment/locale/fr'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'bootstrap/dist/css/bootstrap.css'
import {Modal, Button} from 'react-bootstrap';
import './stylesheet1.css'
import './Ratt.css'

const localizer = momentLocalizer(moment)
require('react-big-calendar/lib/css/react-big-calendar.css')

export default class Rattrapages extends React.Component{
    
  constructor(props) {
    super(props);
    this.state= {
      Matieres : JSON.parse(localStorage.getItem("RattMatieres")),
        Dates: [],
        Lieux: [],
        showModal : false,
        ClickedEvent : "",
        Currentevents: [{'title': 'event1', 'start': new Date(2020,5,1),'end': new Date(2020,5,1), 'allDay': false }]    }
       this.SendToAPI();
      this.callApi(); 
  }
  showModal = (Event) => {this.setState({showModal: true, ClickedEvent : Event })};
  hideModal = () => {this.setState({showModal: false})};
  async callApi(){
    await fetch("https://68a7ecd1b4d5.ngrok.io/Ratt")
    .then(res => res.json())
     .then(res => this.setState({Dates : res.Dates, Lieux : res.Lieu}))
       .catch(err => err);
       await this.addEvents();
  
   }
   async SendToAPI() {
    try{
     fetch('https://68a7ecd1b4d5.ngrok.io/Ratt', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          RattMatt: this.state.Matieres,
        })
      })
  }
  catch(e) {console.log(e)}
  };
 events = [];
  async addEvents() {
  var i= 0;
   this.state.Matieres.forEach(element => {
     this.events.push({title: "Rattrapage " + element + ", Salle: " + this.state.Lieux[i],  'start': new Date(this.state.Dates[i]),
 'end': new Date(this.state.Dates[i]), 'allDay': false });
   this.setState({Currentevents : this.events})
   i++;
   });

  }
  ModalShow() {
//Show modal each time an event is clicked
  }
 
  render(){

    const messages = {
        allDay: 'journée',
        previous: 'précédent',
        next: 'suivant',
        today: 'aujourd\'hui',
        month: 'mois',
        week: 'semaine',
        day: 'jour',
        agenda: 'Agenda',
        date: 'date',
        time: 'heure',
        event: 'événement', 
        showMore: total => `+ ${total} événement(s) supplémentaire(s)`,
      
      }
      return (
        <MenuProvider MenuComponent={MenuContainer} direction = 'left' animation = 'slide' >
            <div>
  
            </div> 
        <div id= "container">
           <div className= "header">
        <nav id = 'nav'> <img src="./logo.jpg" alt="logo" /> <div className="text">Est-Notes  </div>
        <div style = {{float: 'right' , marginTop:'-28px' }}>
        <Menu /> 
        </div> 
         </nav>
               
            </div>
            <h2 className="header2"> Rattrapages </h2>
            <div>
    <Calendar
    selectable = {true}
    messages = {messages}
      localizer={localizer}
      events= {this.events}
       culture = 'fr'
      style={{ height: 500, width : '98%', backgroundColor: '#f9fcfb' }}
     onSelectEvent = {event => this.showModal(event.title)}
    />
  </div>
   <div> 

      <Modal show={this.state.showModal} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Alerte</Modal.Title>
        </Modal.Header>
      <Modal.Body> Vous avez un {this.state.ClickedEvent},  Serait vous présent(e)? 
   <div style= {{color: '#d92027', fontWeight : 'bold'}}> (veuillez marquer votre presence pour pouvoir assiter au rattrapage) </div> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style= {{width: '40%'}} onClick={this.hideModal}>
            Fermer
          </Button>
          <Button variant="primary" style= {{width: '40%'}} onClick={this.hideModal}>
            Marquer votre presence
          </Button>
        </Modal.Footer>
      </Modal></div>
            </div>
            </MenuProvider> 
            
      );
  }
}