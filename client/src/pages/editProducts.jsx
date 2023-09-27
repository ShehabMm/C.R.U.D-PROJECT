import { Box, Button } from "@mui/material";
import axios from "axios";
import CircularWithValueLabel from "../components/spinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditProducts = () => {
  // type pro = {
  //   id?: number;
  //   name?: string;
  //   price?:number;
  //   items?:number;
  // }

  const [image, setImage] = useState("");
  const [ProName, setproName] = useState("");
  const [proPrice, setproPrice] = useState(0);
  const [proItems, setproItems] = useState(0);
  const [proId, setproId] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((data) => {
      console.log(data.data.data);
      setImage(data.data.data.image);
      setproName(data.data.data.name);
      setproPrice(data.data.data.price);
      setproItems(data.data.data.items);
      setproId(data.data.data.id);
    });
  }, []);

  const navigate = useNavigate();

  if (image === "") {
    return <h1 style={{ color: "black" }}>hhhhhhh</h1>;
  } else {
    return (
      <Box sx={{ backgroundColor: "black", height: "100vh", color: "white" }}>
        <form
          style={{
            justifyContent: "center",
            width: "300px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            position: "relative",
            top: "200px",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            style={{ color: "black" }}
            value={image}
            onChange={(eo) => {
              setImage(eo.target.value);
            }}
          />

          <input
            type="text"
            style={{ color: "black" }}
            value={ProName}
            onChange={(eo) => {
              setproName(eo.target.value);
            }}
          />

          <input
            type="number"
            style={{ color: "black" }}
            value={proPrice}
            onChange={(eo) => {
              setproPrice(+eo.target.value);
            }}
          />

          <input
            style={{ color: "black" }}
            type="number"
            value={proItems}
            onChange={(eo) => {
              setproItems(+eo.target.value);
            }}
          />
          <input
            type="number"
            value={proId}
            onChange={(eo) => {
              setproId(+eo.target.value);
            }}
          />

          <Button
            type="submit"
            sx={{ width: "100px" }}
            onClick={(e) => {
              e.preventDefault();
              axios
                .put(`http://localhost:8080/products/${id}`, {
                  image,
                  name: ProName,
                  price: proPrice,
                  items: proItems,
                  id: proId,
                })
                .then(function (response) {
                  console.log(response);
                });
              setTimeout(() => {
                navigate("/products");
              }, 2000);
            }}
            variant="contained"
          >
            update
          </Button>
        </form>
      </Box>
    );
  }
};

export default EditProducts;
