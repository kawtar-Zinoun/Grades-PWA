import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {



render() {
    return (
      <Router>
        <div>
    <Routes />
    </div>
    </Router>
    
    );
  
}
}

ReactDOM.render(
 <App />,
 document.getElementById('inside') );

  
  
export default App;