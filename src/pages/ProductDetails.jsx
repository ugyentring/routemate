import { useParams } from "react-router-dom"

const ProductDetails = () => {
  const params = useParams()
  return (
    <div className="component">{params.id} - 
      ProductDetails
    </div>
  )
}

export default ProductDetails
