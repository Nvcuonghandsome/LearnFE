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
import Form from './Form';
import Validate1 from './ValidateForm';
import Validate2 from './ValidateForm2';
import Register from './Register';
import LoginMyRegister from './LoginMyRegister';
import AxiosGet from './AxiosGet';
import AxiosPost from './AxiosPost';
import AxiosDelete from './AxiosDelete';
import AxiosBai1 from './AxiosBai1';
import AxiosBai2A from './AxiosBai2A';

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
          <Route path='/form' element={<Form />} />
          <Route path='validate1' element={<Validate1 />} />
          <Route path='validate2' element={<Validate2 />} />
          <Route path='/register' element={<Register />} />
          <Route path='/loginmyregister' element={<LoginMyRegister />} />
          <Route path='/axiosget' element={<AxiosGet />} />
          <Route path='/axiospost' element={<AxiosPost />} />
          <Route path='/axiosdelete' element={<AxiosDelete />} />
          <Route path='/axiosbai1' element={<AxiosBai1 />} />
          <Route path='/axiosbai2a' element={<AxiosBai2A />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
