import Topbar from './Topbar'
import Header from './Header'
import Footer from './Footer'

function App(props) {

  return (
    <div>
      <Topbar />
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default App;
