import { Route, Routes } from 'react-router-dom';
import AllItems from './components/AllItems';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<AllItems />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
