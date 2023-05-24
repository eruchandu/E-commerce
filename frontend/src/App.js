
import data from './data'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import{LinkContainer} from 'react-router-bootstrap';
function App() {
  console.log(data.products);
  return (
    <BrowserRouter>
    <div  className='d-flex flex-column site-container'>
      <header >
      <Navbar bg="dark" variant="dark">
        <Container>
         <LinkContainer to="/">
           <Navbar.Brand>Amazona </Navbar.Brand>
         </LinkContainer>
        </Container>
      </Navbar>
       
      </header>
      <main>
      <Container className="mt-3">
      <Routes>
        <Route path="/" element=<HomeScreen></HomeScreen>>
        
        </Route>
        <Route path="/product/slug/:slug" element=<ProductScreen></ProductScreen>></Route>
      </Routes>
      </Container>


      </main>
      <div className='text-center mt-5'> All Rights Reserved </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
