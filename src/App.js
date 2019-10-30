import React from 'react';
// Import Our Routes //
import { HashRouter } from 'react-router-dom';
import routes from './routes';

// Redux Files Here //
import store from './ducks/store';
import {Provider} from 'react-redux';


// Styling File //
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          {routes}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
