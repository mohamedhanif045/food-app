import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
// import Home from './Home';
// import RestaurantPage from './RestaurantPage';
// import Cart from './Cart';
// import Checkout from './Checkout';
import ProfilePage from './ProfilePage';
// import OrderTrackingPage from './OrderTrackingPage';
// import Login from './Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/restaurant/:id" element={<RestaurantPage />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Profile route uncommented */}
        {/* <Route path="/order-tracking" element={<OrderTrackingPage />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
