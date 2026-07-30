import { useState } from "react";
import { addOrder } from "../services/orderService";

function OrderForm() {

  const [loading, setLoading] = useState(false);

  const [order, setOrder] = useState({
    restaurantName: "",
    itemCount: "",
    isPaid: false,
    deliveryDistance: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setOrder({
      ...order,
      [name]: type === "checkbox" ? checked : value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      await addOrder(order);

      alert("Order Added Successfully");

      setOrder({
        restaurantName: "",
        itemCount: "",
        isPaid: false,
        deliveryDistance: ""
      });

    } catch (error) {

      console.error(error);
      alert("Error adding order");

    } finally {

      setLoading(false);

    }
  };


  return (
    <div>
      <h2>Add Order</h2>

      <form className="order-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Restaurant Name</label>
          <input
            type="text"
            name="restaurantName"
            placeholder="e.g. Domino's"
            value={order.restaurantName}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label>Number of Items</label>
          <input
            type="number"
            name="itemCount"
            placeholder="e.g. 2"
            value={order.itemCount}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label>Delivery Distance (km)</label>
          <input
            type="number"
            step="0.1"
            name="deliveryDistance"
            placeholder="e.g. 4.5"
            value={order.deliveryDistance}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label>Payment Status</label>

          <div className="radio-group">

            <label>
              <input
                type="radio"
                name="isPaid"
                checked={!order.isPaid}
                onChange={() =>
                  setOrder({
                    ...order,
                    isPaid: false
                  })
                }
              />
              Unpaid
            </label>


            <label>
              <input
                type="radio"
                name="isPaid"
                checked={order.isPaid}
                onChange={() =>
                  setOrder({
                    ...order,
                    isPaid: true
                  })
                }
              />
              Paid
            </label>

          </div>
        </div>


        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Order"}
        </button>


      </form>
    </div>
  );
}

export default OrderForm;