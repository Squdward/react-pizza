import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

// Optimze bundle
const Home = lazy(() => import('./pages/Home/home'));
const Cart = lazy(() => import('./pages/Cart/cart'));

function App() {
  return (
    <Suspense fallback={<div>Привет, ждем загрузку :c </div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
}

export default App;
