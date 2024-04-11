import React, { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      restaurant: "McDonald's",
      items: [
        { id: 1, name: 'Big Mac', price: '3.99' },
        { id: 2, name: 'Fries', price: '1.79' },
        { id: 3, name: 'Coke', price: '0.99' },
      ],
    },
    {
      id: 2,
      restaurant: "Chick-fil-A",
      items: [
        { id: 4, name: 'Chicken Sandwich', price: '3.75' },
        { id: 5, name: 'Waffle Potato Fries', price: '1.85' },
        { id: 6, name: 'Lemonade', price: '1.99' },
      ],
    },
    {
      id: 3,
      restaurant: "Whataburger",
      items: [
        { id: 7, name: 'Whataburger', price: '3.59' },
        { id: 8, name: 'Onion Rings', price: '2.19' },
        { id: 9, name: 'Shake', price: '2.79' },
      ],
    },
  ]);

  const [newOrderRestaurant, setNewOrderRestaurant] = useState('McDonald\'s');

  const addOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      restaurant: newOrderRestaurant,
      items: [],
    };
    setOrders([...orders, newOrder]);
  };

  const addItem = (orderId, newItem) => {
    newItem.id = Math.floor(Math.random() * 1000000); // Generate a unique ID
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, items: [...order.items, newItem] };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const addItemToOrder = (orderId) => {
    const newItem = {
      id: Math.floor(Math.random() * 1000000),
      name: "New Item",
      price: "0.00" // You can set the default price here
    };
    addItem(orderId, newItem);
  };

  const editItemName = (orderId, itemId, newName) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        const updatedItems = order.items.map(item => {
          if (item.id === itemId) {
            return { ...item, name: newName };
          }
          return item;
        });
        return { ...order, items: updatedItems };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const editItemPrice = (orderId, itemId, newPrice) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        const updatedItems = order.items.map(item => {
          if (item.id === itemId) {
            return { ...item, price: newPrice };
          }
          return item;
        });
        return { ...order, items: updatedItems };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const deleteItem = (orderId, itemId) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        const updatedItems = order.items.filter(item => item.id !== itemId);
        return { ...order, items: updatedItems };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const calculateTotalPriceWithTax = (items) => {
    const subtotal = items.reduce((total, item) => total + parseFloat(item.price), 0);
    const tax = subtotal * 0.0825; // Texas sales tax rate
    const totalPriceWithTax = subtotal + tax;
    return totalPriceWithTax.toFixed(2);
  };

  return (
    <div>
      <h1>Recent Orders</h1>
      <select value={newOrderRestaurant} onChange={(e) => setNewOrderRestaurant(e.target.value)}>
        <option value="McDonald's">McDonald's</option>
        <option value="Chick-fil-A">Chick-fil-A</option>
        <option value="Whataburger">Whataburger</option>
      </select>
      <button onClick={addOrder}>Add Order</button>
      {orders.map(order => (
        <div key={order.id}>
          <h2>{order.restaurant}</h2>
          <button onClick={() => addItemToOrder(order.id)}>Add Item</button>
          <ul>
            {order.items.map(item => (
              <li key={item.id}>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => editItemName(order.id, item.id, e.target.value)}
                />
                : 
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => editItemPrice(order.id, item.id, e.target.value)}
                />
                <button onClick={() => deleteItem(order.id, item.id)}>Delete Item</button>
              </li>
            ))}
          </ul>
          <p>Total Price with Tax: ${calculateTotalPriceWithTax(order.items)}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
