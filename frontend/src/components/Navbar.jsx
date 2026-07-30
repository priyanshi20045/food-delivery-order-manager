function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="navbar">

    <h2 className="app-title">
        Food Delivery Order Manager
      </h2>  

      <div className="nav-buttons">

        <button
          className={activeTab === "home" ? "active" : ""}
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>

        <button
          className={activeTab === "add" ? "active" : ""}
          onClick={() => setActiveTab("add")}
        >
          Add Order
        </button>

        <button
          className={activeTab === "orders" ? "active" : ""}
          onClick={() => setActiveTab("orders")}
        >
          All Orders
        </button>

        <button
          className={activeTab === "filter" ? "active" : ""}
          onClick={() => setActiveTab("filter")}
        >
          Filter & Assign
        </button>

      </div>

    </nav>
  );
}

export default Navbar;