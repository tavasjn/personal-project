import React from 'react';
// Import Our Routes //
import { HashRouter } from 'react-router-dom';
import routes from './routes';

// Redux Files Here //
import store from './ducks/store';


// Styling File //
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
