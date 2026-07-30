import { useState } from "react";
import deliveryImage from "../food.png";
import Navbar from "../components/Navbar";
import OrderForm from "../components/OrderForm";
import OrdersTable from "../components/OrdersTable";
import FilterOrders from "../components/FilterOrders";
import AssignDelivery from "../components/AssignDelivery";

function Home() {

    const [activeTab, setActiveTab] = useState("home");

    return (
        <>

            <Navbar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {activeTab === "home" && (

                <div className="home-banner">

                    <img
                        src={deliveryImage}
                        alt="Food Delivery"
                        className="hero-image"
                    />

                </div>

            )}

            {activeTab !== "home" && (

                <div className="container">

                    {activeTab === "add" && (

                        <div className="card">

                            <OrderForm />

                        </div>

                    )}

                    {activeTab === "orders" && (

                        <div className="card">

                            <OrdersTable />

                        </div>

                    )}

                    {activeTab === "filter" && (

                        <div className="card">

                            <FilterOrders />

                            <hr className="divider" />

                            <AssignDelivery />

                        </div>

                    )}

                </div>

            )}

        </>
    );
}

export default Home;