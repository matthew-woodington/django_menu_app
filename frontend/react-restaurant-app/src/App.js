import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import NavBar from "./components/NavBar/NavBar";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import AsideInfo from "./components/AsideInfo/AsideInfo";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [submittedOrders, setSubmittedOrders] = useState([]);

  const handleError = (err) => {
    console.warn(err);
  };

  const getMenuItem = useCallback(async () => {
    const response = await fetch("/api_v1/menuitems/").catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      setMenuItems(data);
    }
  }, []);

  useEffect(() => {
    getMenuItem();
  }, [getMenuItem]);

  // old order method
  // const updateOrder = (id) => {
  //   const index = menuItems.findIndex((item) => item.id === id);
  //   const newOrderItem = menuItems[index];
  //   setOrder([...order, newOrderItem]);
  // };

  const updateOrder = (name, price) => {
    const newOrderItem = { name, price };
    setOrder([...order, newOrderItem]);
  };

  // old order submit
  // const addOrder = (order, customer, phone) => {
  //   let finalOrder = { order, customer, phone };
  //   alert("Your order has been submitted, thank you for your business!");
  //   console.log(finalOrder);
  //   setSubmittedOrders([...submittedOrders, finalOrder]);
  // };

  const addOrder = async (order, customer, phone) => {
    const finalOrder = { order, customer, phone };
    console.log(finalOrder);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalOrder),
    };

    const response = await fetch("/api_v1/orders/", options).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const orderData = await response.json();
      console.log(orderData);
    }
  };

  // not needed
  // useEffect(() => {
  //   localStorage.setItem("submittedOrders", JSON.stringify(submittedOrders));
  // }, [submittedOrders]);

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
