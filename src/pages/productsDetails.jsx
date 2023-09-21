import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ProductsDetails = () => {
  const [product, setproduct] = useState({});
  let { id } = useParams()
  console.log(id)


  useEffect(() => {

    axios.get(`http://localhost:8080/products/${id}`).then((data) => {
      setproduct(data.data.data)
    })
    console.log(product)
  }, []);


  return (
    <div style={{ backgroundColor: "black", height: "100vh", textAlign: "center", paddingTop: "50px" }}>
      <h1>Name:{product.
// @ts-ignore
      name} <hr />
      Price:{product.price}

      </h1>

    </div>
  );
}

export default ProductsDetails;
