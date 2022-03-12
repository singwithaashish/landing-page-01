import { Button } from 'react-bootstrap';
import AboutUs from './component/AboutUs';
import ClientSay from './component/ClientSay';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import HotDeals from './component/HotDeals';
import Products from './component/Products';
import TrustedBy from './component/TrustedBy';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Home/>
      <TrustedBy/>
      <HotDeals/>
      <AboutUs/>
      <Products/>
      <ClientSay/>
      <Footer/>
      {/* <Button>Hi</Button> */}
    </div>
  );
}

export default App;
