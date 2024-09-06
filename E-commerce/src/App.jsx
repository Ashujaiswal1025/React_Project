import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import HomeBar from './Component/HomeBar';
import CartData from './Component/CartData'; // Import CartData
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="w-full absolute">
          <Routes>
            <Route path='/' element={<HomeBar />} />
            <Route path='/CartData' element={<CartData />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
