import './App.css';
import Nav from './components/nav.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Books from './Pages/Books.jsx';
import { books } from './data.js'
import BookInfo from './Pages/BookInfo.jsx';
import Cart from './Pages/Cart.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
      setCart([...cart, {...book, quantity:1}])  
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map(item => item.id === book.id 
       ? {
        ...item,
        quantity: +quantity,
       }
       : item
     )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }
  
  function numberOfItems() {
     let counter = 0;
     cart.forEach((item) => {
        counter += item.quantity
     });
     return counter;
  }
  useEffect(() =>{
    console.log(cart)
  },[cart]);
  
  return (
    <Router>
      <div className="App">
        <Nav  numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={books} />
          <Route path="books/:id" element={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
          <Route path="books/cart" element={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
          </Routes>
        <Footer />
      </div>
   </Router>
  );
}

export default App;
