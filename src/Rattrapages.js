import React from 'react';
import './stylesheet1.css'
import './Ratt.css'
import MenuProvider from 'react-flexible-sliding-menu';
import MenuContainer from './MenuContainer'
import Menu from './WelcomePageX'
import moment from 'moment'
import 'moment/locale/fr'
import { Calendar, momentLocalizer } from 'react-big-calendar'

const localizer = momentLocalizer(moment)

require('react-big-calendar/lib/css/react-big-calendar.css')
export default class Rattrapages extends React.Component{
    
  constructor(props) {
    super(props);
    this.state= {
        events :[]
    }
  }
  
   gapi = window.gapi;
   CLIENT_ID = '101542556843-nfrg10dedu2vbqgokt7836fihaa6ak1f.apps.googleusercontent.com';
   DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
   SCOPES = "https://www.googleapis.com/auth/calendar";
   APIKEY = "AIzaSyAgXdYzICVoIdWPN2yUXY9oo1uQs1C6_V4";
  async handleClientLoad() {
    this.gapi.load('client:auth2', this.initClient);
  }
  async initClient() {
   await this.gapi.client.init({
      apiKey: this.APIKEY,
      clientId: this.CLIENT_ID,
      discoveryDocs: this.DISCOVERY_DOCS,
      scope: this.SCOPES
    })};
    handleAuthClick(){
        this.gapi.auth2.getAuthInstance().signIn();
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
    messages = {messages}
      localizer={localizer}
      events={this.state.events}
       culture = 'fr'
      startAccessor="start"
      endAccessor="end"
      style={{ height: 400, width : '98%', backgroundColor: '#f9fcfb' }}
    />
  </div>
            </div> 

            </MenuProvider> 
            
      );
  }
}