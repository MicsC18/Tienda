import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import { Contacto } from "./components/Contacto/Contacto";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div>
            <Routes>
              {/* */}
              <Route element={<MainLayout />}>
                <Route path="/inicio" element={<ItemListContainer />} />
                <Route path="/" element={<ItemListContainer />} />
                <Route
                  path="/category/:category"
                  element={<ItemListContainer />}
                />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/contacto" element={<Contacto />} />
              </Route>

              {/* */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Login />} />
                <Route
                  path="alta-libros"
                  element={
                    <RutaProtegida>
                      <ProductFormContainer />
                    </RutaProtegida>
                  }
                />
              </Route>
            </Routes>

            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
