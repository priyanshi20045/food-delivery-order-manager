import { useEffect, useState } from "react";
import { getAllOrders } from "../services/orderService";

function OrdersTable() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await getAllOrders();
            setOrders(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>

            <h2>All Orders</h2>

            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Restaurant</th>
                        <th>Items</th>
                        <th>Paid</th>
                        <th>Distance (KM)</th>
                    </tr>
                </thead>

                <tbody>

                    {orders.map((order) => (

                        <tr key={order.orderId}>

                            <td>{order.orderId}</td>
                            <td>{order.restaurantName}</td>
                            <td>{order.itemCount}</td>
                            <td>{order.paid ? "Yes" : "No"}</td>
                            <td>{order.deliveryDistance}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default OrdersTable;