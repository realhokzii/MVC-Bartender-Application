
import { useEffect, useState } from "react";
import { MenuController } from "../controllers/MenuController";
import { OrderModel } from "../models/OrderModel";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    setMenu(MenuController.getMenu());
  }, []);

  const handleOrderClick = (cocktail) => {
    setSelectedCocktail(cocktail);
    setShowForm(true);
    setOrderPlaced(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerName) return;
    OrderModel.add({
      id: Date.now(),
      customer: customerName,
      cocktail: selectedCocktail.name,
      price: selectedCocktail.price
    });
    setOrderPlaced(true);
    setShowForm(false);
    setCustomerName("");
    setSelectedCocktail(null);
  };


 
  const { useNavigate } = require("react-router-dom");
  const navigate = useNavigate();

  return (
    <div>
      <h2>Drink Menu</h2>
      <ul>
        {menu.map(item => (
          <li key={item.id}>
            {item.name} — ${item.price.toFixed(2)}
            <button style={{ marginLeft: 10 }} onClick={() => handleOrderClick(item)}>
              Order
            </button>
          </li>
        ))}
      </ul>
      {showForm && selectedCocktail && (
        <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
          <h3>Order: {selectedCocktail.name}</h3>
          <label>
            Your Name:
            <input
              type="text"
              value={customerName}
              onChange={e => setCustomerName(e.target.value)}
              required
            />
          </label>
          <button type="submit" style={{ marginLeft: 10 }}>Place Order</button>
        </form>
      )}
      {orderPlaced && (
        <div style={{ marginTop: 20, color: "green" }}>
          Order placed! Thank you.
        </div>
      )}
      <hr style={{ margin: '30px 0', border: '1px solid #ccc' }} />
      <button style={{ marginTop: 10, padding: '10px 20px', fontSize: '16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => navigate("/")}>⟵ Back to Home</button>
    </div>
  );
}
