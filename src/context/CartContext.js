import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  const addItem = (productToAdd) => {
    setCart([...cart, productToAdd]);
    saveStorage(cart);
  };

  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem("cart")) ?? [];
    setCart(cartStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    getQuantity();
  }, [cart]);

  useEffect(() => {
    const calculateTotal = cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );

    localStorage.setItem("total", calculateTotal);
    setTotal(calculateTotal);
  }, [cart]);

  const getQuantity = () => {
    let count = 0;
    cart.forEach((prod) => {
      count += prod.quantity;
    });

    setCount(count);
    return count;
  };

  const isInCart = (id, quantity) => {
    if (cart.some((product) => product.id === id)) {
      const cartUpdate = cart.map((product) => {
        if (product.id === id) {
          product.quantity = product.quantity + quantity;
        }
        return product;
      });
      setCart(cartUpdate);
      saveStorage(cartUpdate);
    }
  };

  const incrementUnits = (id) => {
    const cartUpdate = cart.map((product) => {
      if (product.id === id && product.quantity < product.stock) {
        product.quantity = product.quantity + 1;
        console.log(product.quantity);
      } else {
        console.log("No contamos con mas unidades disponibles");
      }
      return product;
    });
    setCart(cartUpdate);
    saveStorage(cartUpdate);
  };

  const decrementUnits = (id) => {
    const cartUpdate = cart.map((product) => {
      if (product.id === id && product.quantity > 1) {
        product.quantity = product.quantity - 1;
        console.log(product.quantity);
      }
      return product;
    });
    setCart(cartUpdate);
    saveStorage(cartUpdate);
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
        getQuantity,
        count,
        decrementUnits,
        incrementUnits,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };

export default CartContext;
