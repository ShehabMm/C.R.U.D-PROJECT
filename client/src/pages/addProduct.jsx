import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgressWithLabel from "../components/spinner";

const AddProduct = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [items, setNumber] = useState(0);
  const [id, setID] = useState(0);
  const [caseCheck, setCase] = useState(true);

  const navigate = useNavigate();
  const all = { image, name, price, items, id };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/pro", all).then(function (response) {
      console.log(response);
    });
    setCase(false);
    setTimeout(() => {
      navigate("/products");
    }, 3000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        border: "2px solid black",
        width: "100vw",
        height: "600px",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        position: "relative",
        color:"black"
      }}
    >
      <h1 style={{color:"black"}}>Add a new Product</h1>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Image Name"
          type="text"
          style={{ color: "black" }}
          onChange={(eo) => {
            setImage(eo.target.value);
          }}
        />
        <input
          placeholder="Product Name"
          type="text"
          style={{ color: "black" }}
          onChange={(eo) => {
            setName(eo.target.value);
          }}
        />
        <input
          placeholder="Product Price"
          type="number"
          style={{ color: "black" }}
          onChange={(eo) => {
            // @ts-ignore
            setPrice(eo.target.value);
          }}
        />
        <input
          placeholder="Item Number"
          type="number"
          style={{ color: "black" }}
          onChange={(eo) => {
            // @ts-ignore
            setNumber(eo.target.value);
          }}
        />
        <input
          // @ts-ignore
          placeholder="ID"
          type="number"
          style={{ color: "black" }}
          onChange={(eo) => {
            // @ts-ignore
            setID(eo.target.value);
          }}
        />
        <button style={{ color: "black" }} type="submit">
          {caseCheck ? "Confirm" : <CircularProgressWithLabel />}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
