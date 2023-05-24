
import data from './data'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Link } from 'react-router-dom';
function App() {
  console.log(data.products);
  return (
    <BrowserRouter>
    <div >
      <header >
       <Link to="/">Amazona </Link>
      </header>
      <main>
      <Routes>
        <Route path="/" element=<HomeScreen></HomeScreen>>
        
        </Route>
        <Route path="/product/:slug" element=<ProductScreen></ProductScreen>></Route>
      </Routes>


      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
