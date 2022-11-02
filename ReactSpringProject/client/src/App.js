import React from 'react';
import './App.css';
import BaseRoutes from './routes/BaseRoutes';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const App = () => {
  return (
    <div className="App">
      <BaseRoutes/>
    </div>
  );
}

export default App;
