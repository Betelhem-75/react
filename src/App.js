import './App.css';
import Nav from './components/nav.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Books from './Pages/Books.jsx';
import { books } from './data.js'
import BookInfo from './Pages/BookInfo.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/books"  render={() => <Books books={books} />} />
          <Route path="books/1" render={() => <BookInfo books={books} />} />
          </Routes>
        <Footer />
      </div>
   </Router>
  );
}

export default App;
