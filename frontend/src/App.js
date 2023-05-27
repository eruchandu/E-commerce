
import data from './data'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import{LinkContainer} from 'react-router-bootstrap';
import Badge from 'react-bootstrap/esm/Badge';
import { Store } from './Store.js';
import CartScreen from './screens/CartScreen';
import { useContext } from 'react';
function App() {
  const {state}=useContext(Store);
  const {cart}=state;
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
         <Nav className= "nav-link">
          <Link to="/cart" className="nav-link">
            Cart &ensp;{
              cart.cartItems.length>0&&(<Badge pill bg="danger">{cart.cartItems.reduce((a,c)=>a+c.quantity,0)}</Badge>)
            }
          </Link>
         </Nav>
        </Container>
      </Navbar>
       
      </header>
      <main>
      <Container className="mt-3">
      <Routes>
        <Route path="/" element=<HomeScreen></HomeScreen>>
        
        </Route>
        <Route path="/cart" element=<CartScreen></CartScreen>>
        
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
