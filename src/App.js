
import './App.scss';
//import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Catagories from './components/Catagories/Catagories';
import ProductsDisplay from './components/ProductsDisplay/ProductsDisplay';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Catagories tags={tags} />
      <ProductsDisplay tags='All' />
    </div>
  );
}

export default App;
