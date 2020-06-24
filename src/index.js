import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes.js'
import * as serviceWorker from './worker.js'
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
 //serviceWorker.unregister();
  
  
export default App;