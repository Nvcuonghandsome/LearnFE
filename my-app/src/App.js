import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Header from './Header'
import Topbar from './Topbar'
import Footer from './Footer'
import Home from './Home'
import Cart from './Cart'
import Login from './Login'

function App() {

  return (
    <Router>
      <Topbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
