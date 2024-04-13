import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <main>
      <div className="component">{params.id} - ProductDetails</div>
    </main>
  );
};

export default ProductDetails;
