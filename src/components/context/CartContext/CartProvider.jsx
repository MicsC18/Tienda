import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exists = (id) => {
    const exist = cart.some((l) => l.id === id);
    return exist;
  };

  const addItem = (item) => {
    if (exists(item.id)) {
      const updatedCart = cart.map((book) => {
        if (book.id === item.id) {
          //cuido mutacion a nivel de objeto
          return { ...book, quantity: book.quantity + item.quantity };
        } else {
          return book;
        }
      });
      setCart(updatedCart);
      alert("Libro agregado");
    } else {
      setCart([...cart, item]);
      alert(`${item.name} agregado`);
    }
  };

  const deleteItem = (id) => {
    const filtered = cart.filter((b) => b.id !== id);
    setCart(filtered);
    alert("Libro eliminado");
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    const totalItems = cart.reduce((acc, b) => acc + b.quantity, 0);
    return totalItems;
  };

  const total = () => {
    const total = cart.reduce((acc, b) => acc + b.price * b.quantity, 0);
    return Math.round(total * 100) / 100;
  };

  const checkout = () => {
    const ok = confirm("¿Seguro que quiere finalizar la compra?");
    if (ok) {
      alert("Compra realizada");
      clearCart();
    }
  };

  const values = {
    cart,
    addItem,
    clearCart,
    getTotalItems,
    deleteItem,
    total,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
