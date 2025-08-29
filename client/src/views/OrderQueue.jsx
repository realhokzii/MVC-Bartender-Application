import { useEffect, useState } from "react";
import { OrderModel } from "../models/OrderModel";
import { useNavigate } from "react-router-dom";

export default function OrderQueue() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setOrders(OrderModel.getAll());
  }, []);

  return (
    <div>
      <h2>Cocktail Order Queue</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <strong>{order.cocktail}</strong> for <em>{order.customer}</em> — ${order.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <hr style={{ margin: '30px 0', border: '1px solid #ccc' }} />
      <button style={{ marginTop: 10, padding: '10px 20px', fontSize: '16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => navigate("/")}>⟵ Back to Home</button>
    </div>
  );
}
