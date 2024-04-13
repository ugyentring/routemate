import { Routes, Route, Navigate } from "react-router-dom";
import {
  ProductDetails,
  ProductList,
  Home,
  Contact,
  Admin,
  PageNotFound,
} from "../pages";

const AllRoutes = () => {
  const user = true;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={user ? <Admin /> : <Navigate to="/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
