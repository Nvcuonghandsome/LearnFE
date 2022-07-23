import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './Home'
import Cart from './Cart'
import Login from './Login'
import Toogle from './Toogle';
import Greeting from './Greeting';
import Dangnhap from './Dangnhap';
import Mailbox from './Mailbox';
import Warning from './Warning';
import Lists from './List_and_Key';
import A from './A';
import C from './C';

let messages = ['React', 'HTML', 'CSS', 'JS']
let numbers = [1, 2, 3, 4, 5]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/toogle' element={<Toogle />} />
          <Route path='/greeting' element={<Greeting isLoggedIn={true} />} />
          <Route path='/dangnhap' element={<Dangnhap />} />
          <Route path='/mailbox' element={<Mailbox unreadMessages={messages} />} />
          <Route path='/warning' element={<Warning />} />
          <Route path='/listandkey' element={<Lists numbers={numbers} />} />
          <Route path='/a' element={<A />} />
          <Route path='/c' element={<C />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
