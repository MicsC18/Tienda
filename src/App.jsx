import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import { Contacto } from "./components/Contacto/Contacto";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext/CartProvider";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div>
            <Header />
            <Routes>
              <Route path="/inicio" element={<ItemListContainer />} />
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<ItemDetailContainer />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>

            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
