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

<select>

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
/>

</div>

<button>
Filter Orders
</button>
        </div>

    );

}

export default FilterOrders;