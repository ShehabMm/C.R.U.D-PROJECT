import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ProductsDetails = () => {
  const [product, setproduct] = useState({});
  let { id } = useParams()
  console.log(id)


  useEffect(() => {

    axios.get(`https://c-r-u-d-project-mongodb200.onrender.com/products/${id}`).then((data) => {
      setproduct(data.data.data)
    })
    console.log(product)
  }, []);


  return (
    <div style={{ backgroundColor: "black", height: "100vh", textAlign: "center", paddingTop: "50px" }}>
      <h1>Name:{product.
// @ts-ignore
      name} <hr />
      Price:{product.
// @ts-ignore
      price}

      </h1>

    </div>
  );
}

export default ProductsDetails;
