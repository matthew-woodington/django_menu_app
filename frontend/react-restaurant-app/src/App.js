import "./App.css";
import { useEffect, useState } from "react";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import NavBar from "./components/NavBar/NavBar";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import AsideInfo from "./components/AsideInfo/AsideInfo";

function App() {
  const [menuItems, setMenuItems] = useState(null);
  const [order, setOrder] = useState([]);
  const [submittedOrders, setSubmittedOrders] = useState([]);

  useEffect(() => {
    const getMenuItem = async () => {
      const response = await fetch("/api_v1/menuitems/");
      if (!response.ok) {
        throw new Error("Network response was not OK");
      } else {
        const data = await response.json();
        setMenuItems(data);
      }
    };

    getMenuItem();
  }, []);

  const updateOrder = (id) => {
    const index = menuItems.findIndex((item) => item.id === id);
    const newOrderItem = menuItems[index];
    setOrder([...order, newOrderItem]);
  };

  const addOrder = (order, customer, phone) => {
    let finalOrder = { order, customer, phone };
    alert("Your order has been submitted, thank you for your business!");
    console.log(finalOrder);
    setSubmittedOrders([...submittedOrders, finalOrder]);
  };

  useEffect(() => {
    localStorage.setItem("submittedOrders", JSON.stringify(submittedOrders));
  }, [submittedOrders]);

  const resetOrder = () => {
    setOrder([]);
  };

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main className="main">
        <section className="featured">
          <FeaturedSection />
        </section>
        <section className="menuArea">
          <Menu menuItems={menuItems} updateOrder={updateOrder} />
          <aside className="sidebar">
            <Order order={order} addOrder={addOrder} resetOrder={resetOrder} />
            <AsideInfo />
          </aside>
        </section>
      </main>
    </>
  );
}

export default App;
