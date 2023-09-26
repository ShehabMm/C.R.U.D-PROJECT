import { Box, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
const EditProducts = () => {
  // type pro = {
  //   id?: number;
  //   name?: string;
  //   price?:number;
  //   items?:number;
  // }


  const [pro, setpro] = useState({});
  // @ts-ignore
  const [image, setImage] = useState(pro.image);

  // @ts-ignore
  const [ProName, setproName] = useState(pro.name);
  // @ts-ignore
  // @ts-ignore
  const [proPrice, setproPrice] = useState(pro.price);
  // @ts-ignore
  const [proItems, setproItems] = useState(pro.items);
  // @ts-ignore
  const [proId, setproId] = useState(pro.id);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((data) => {
      console.log(data.data.data);
      setpro(data.data.data);
      console.log(pro);
    });
  }, []);

const navigate = useNavigate()





  return (
    <Box sx={{ backgroundColor: "black", height: "100vh", color: "white", }}>
      <h1>Edit Product number {id}</h1>

      <form style={{ margin: "auto", display: "flex", flexDirection: "column", gap: "20px", width: "10%" }}>
        <input type="text" style={{ color: "black" }} placeholder={pro.
// @ts-ignore
        name} onChange={(eo) => {
          setproName(eo.target.value)

        }} />

        <input type="number" style={{ color: "black" }} placeholder={pro.
// @ts-ignore
        price} onChange={(eo) => {
          setproPrice(eo.target.value)

        }} />

        <input style={{color:"black"}}    type="number" placeholder={pro.
// @ts-ignore
        items} onChange={(eo) => {
          setproItems(eo.target.value)

        }} />
        <input type="number" placeholder={pro.
// @ts-ignore
        id} onChange={(eo) => {
          setproId(eo.target.value)

        }} />
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            axios.put(`http://localhost:8080/products/${id}`, {image,name: ProName, price:proPrice, items:proItems, id:proId }).then(function (response){
console.log(response)

            })
            setTimeout(() => {
              navigate('/products')

            }, 2000);
          }}
          variant="contained"
        >
          update
        </Button>
      </form>
    </Box>
  );
};

export default EditProducts;
