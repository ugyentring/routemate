import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  Home,
  Admin,
  ProductDetails,
  ProductList,
  PageNotFound,
  Contact,
} from "./pages";
import "./App.css";

const App = () => {
  const user = true;
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
