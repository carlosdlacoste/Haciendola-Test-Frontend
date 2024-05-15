import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './pages/login.jsx'
import { Home } from "./pages/home.jsx";
import { Navbar } from "./components/navbar.jsx";
import { Products } from "./pages/products.jsx";
import { ProductDetails } from "./pages/productDetails.jsx";
import { NewProduct } from "./pages/newProduct.jsx";
import './App.css';

function App() {
  return (
    <div>
            <BrowserRouter>
              <Navbar />
              <div style={{minHeight: "100vh"}}>
                  <Routes>
                      <Route element={<Home />} path="/" />
                      <Route element={<Login />} path="/login" />
                      <Route element={<Products />} path="/products" />
                      <Route element={<ProductDetails />} path="/products/:id" />
                      <Route element={<NewProduct />} path="/products/new" />
                      {/* <Route element={<Signup />} path="/signup" /> */}
                      <Route element={<h1>Not found!</h1>} />
                  </Routes>
              </div>
            </BrowserRouter>
        </div>
  );
}

export default App;
