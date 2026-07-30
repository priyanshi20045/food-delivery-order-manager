import { useState } from "react";
import { assignDelivery } from "../services/orderService";

function AssignDelivery() {

    const [maxDistance, setMaxDistance] = useState("");
    const [assignedOrder, setAssignedOrder] = useState(null);

    const handleAssign = async () => {

        try {

            const response = await assignDelivery(maxDistance);
            setAssignedOrder(response.data);

        } catch (error) {
            console.error(error);
            alert("No order found.");
        }

    };

    return (

        <div>

            <h2>Assign Delivery</h2>

            <input
                type="number"
                placeholder="Maximum Distance"
                value={maxDistance}
                onChange={(e) => setMaxDistance(e.target.value)}
            />

            <br /><br />

            <button onClick={handleAssign}>
                Assign Delivery
            </button>

            <br /><br />

            {assignedOrder && (

                <div>

                    <h3>Assigned Order</h3>

                    <p><strong>Order ID:</strong> {assignedOrder.orderId}</p>
                    <p><strong>Restaurant:</strong> {assignedOrder.restaurantName}</p>
                    <p><strong>Items:</strong> {assignedOrder.itemCount}</p>
                    <p><strong>Paid:</strong> {assignedOrder.paid ? "Yes" : "No"}</p>
                    <p><strong>Distance:</strong> {assignedOrder.deliveryDistance} km</p>

                </div>

            )}

        </div>

    );

}

export default AssignDelivery;