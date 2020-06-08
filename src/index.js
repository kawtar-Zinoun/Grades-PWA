import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes.js'

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