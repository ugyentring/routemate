import { useSearchParams, useLocation } from "react-router-dom";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  return (
    <>
      <main>
        <div className="component">
          <h1>Productlist</h1>
        </div>
      </main>
    </>
  );
};

export default ProductList;
