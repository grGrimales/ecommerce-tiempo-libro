import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/ui/NavBar";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import { OrdenService } from "./components/OrdenService";
import { GeneratedOrder } from "./components/GeneratedOrder";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
