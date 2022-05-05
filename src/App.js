import { ItemDetailContainer } from "./components/products/ItemDetailContainer";
import { ItemListContainer } from "./components/products/ItemListContainer";
import { NavBar } from "./components/ui/NavBar";
import { CartProvider } from "./context/CartContext";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/Cart";
import { OrdenService } from "./components/checkout/OrdenService";
import { GeneratedOrder } from "./components/checkout/GeneratedOrder";
import { NotificationProvider } from "./notification/Notification";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greetings="Tiempo Libro" />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/order" element={<OrdenService />} />
              <Route path="/order-gererated" element={<GeneratedOrder />} />

              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route
                path="*"
                element={<ItemListContainer greetings="Tiempo Libro" />}
              />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
