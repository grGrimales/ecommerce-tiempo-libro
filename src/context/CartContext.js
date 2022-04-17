import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(2);

  const addItem = (productToAdd) => {
    setCart([...cart, productToAdd]);
    saveStorage(cart);

    console.log(cart);
  };

  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem("cart")) ?? [];
    setCart(cartStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isInCart = (id, quantity) => {
    if (cart.some((product) => product.id === id)) {
      const cartUpdate = cart.map((product) => {
        if (product.id === id) {
          product.quantity = quantity;
        }
        return product;
      });
      setCart(cartUpdate);
      saveStorage(cartUpdate);
    }
  };

  const removeItem = (id) => {
    const cartUpdate = cart.filter((product) => product.id !== id);
    setCart(cartUpdate);
  };

  const saveStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const clear = () => {
    setCart([]);
    saveStorage(cart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        isInCart,
        removeItem,
        total,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };

export default CartContext;
