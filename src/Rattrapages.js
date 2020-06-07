import React from 'react';
import './stylesheet1.css'
import './Ratt.css'
import MenuProvider from 'react-flexible-sliding-menu';
import MenuContainer from './MenuContainer'
import Menu from './WelcomePageX'
import moment from 'moment'
import 'moment/locale/fr'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import {Modal, Button} from 'react-bootstrap';

const localizer = momentLocalizer(moment)
require('react-big-calendar/lib/css/react-big-calendar.css')

export default class Rattrapages extends React.Component{
    
  constructor(props) {
    super(props);
    this.state= {
      Matieres : JSON.parse(localStorage.getItem("RattMatieres")),
      RattMatieres : [],
       
        apiState : "test",
        events2: [{'title': 'event1', 'start': new Date(2020,5,1),'end': new Date(2020,5,1), 'allDay': false },
         {'title': 'event2', 'start': new Date(2020,5,3), 'end': new Date(2020,5,3), 'allDay': false }]    }
         this.SendToAPI();
        this.callApi(); 
  }

  async callApi(){
    await fetch("https://68a7ecd1b4d5.ngrok.io/Ratt")
    .then(res => res.text())
     .then(res => this.setState({apiState : res}))
       .catch(err => err);
     
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
  addEvents() {
   // to Add events depending on number of ratt
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
      events= {this.state.events2}
       culture = 'fr'
      style={{ height: 400, width : '98%', backgroundColor: '#f9fcfb' }}
      // onSelectEvent = {}
    />
  </div>
      <div>{this.state.apiState}</div>
            </div>
            </MenuProvider> 
            
      );
  }
}