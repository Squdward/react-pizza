import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Cart } from './pages/Cart/cart';
import { Home } from './pages/Home/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
