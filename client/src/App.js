import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./views/Menu";
import OrderQueue from "./views/OrderQueue";
const PlaceOrder = () => <div><h2>Place Order (Patron)</h2><p>Coming soon...</p></div>;

export default function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>🍸 Bartender MVC</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Welcome!</h2>
                <Link to="/menu"><button>Patron: Order Cocktails</button></Link>
                <Link to="/orders"><button style={{ marginLeft: 10 }}>Bartender: View Order Queue</button></Link>
              </div>
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<OrderQueue />} />
        </Routes>
      </div>
    </Router>
  );
}
