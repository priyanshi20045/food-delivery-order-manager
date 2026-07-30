import { useState } from "react";
import { filterOrders } from "../services/orderService";

function FilterOrders() {

    const [isPaid, setIsPaid] = useState(false);
    const [maxDistance, setMaxDistance] = useState("");
    const [orders, setOrders] = useState([]);

    const handleFilter = async () => {
        try {
            const response = await filterOrders(isPaid, maxDistance);
            setOrders(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>

            <h2>Filter Orders</h2>

            <div className="form-group">

                <label>Payment Status</label>

                <select
                    value={isPaid}
                    onChange={(e) => setIsPaid(e.target.value === "true")}
                >
                    <option value="false">
                        Unpaid
                    </option>

                    <option value="true">
                        Paid
                    </option>

                </select>

            </div>


            <div className="form-group">

                <label>Maximum Delivery Distance (km)</label>

                <input
                    type="number"
                    placeholder="e.g. 5"
                    value={maxDistance}
                    onChange={(e) => setMaxDistance(e.target.value)}
                />

            </div>


            <button onClick={handleFilter}>
                Filter Orders
            </button>


            <h3>Filtered Orders</h3>

            {orders.map((order) => (
                <div key={order.orderId}>
                    <p>Restaurant: {order.restaurantName}</p>
                    <p>Items: {order.itemCount}</p>
                    <p>Distance: {order.deliveryDistance} km</p>
                    <p>Paid: {order.paid ? "Yes" : "No"}</p>
                </div>
            ))}

        </div>
    );
}

export default FilterOrders;