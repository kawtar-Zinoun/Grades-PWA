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
       // events : JSON.parse(localStorage.getItem("RattMatieres")),
        events2: [{'title': 'event1', 'start': this.randomDate(new Date(2020,5,1), new Date(2020,5,1), 8, 14), 'end': new Date(2020,5,1),  'allDay': false },
         {'title': 'event2', 'start': new Date(2020,5,3), 'end': new Date(2020,5,3), 'allDay': false }]    }
         
  }
 randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    console.log(date);
    return date;
   
  }
  addEvents() {
    const arr = JSON.parse(localStorage.getItem("RattMatieres"));
    arr.forEach(element => {
      console.log(element);
    });
  }
  ModalShow() {

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
  <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog> 
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

            </div>
            </MenuProvider> 
            
      );
  }
}