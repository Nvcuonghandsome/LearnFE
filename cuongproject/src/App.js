import Header from "./Header";
import Footer from "./Footer";

function App(props) {

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default App;
