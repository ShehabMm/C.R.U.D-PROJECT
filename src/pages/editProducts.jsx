import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const EditProducts = () => {
  const [pro, setpro] = useState({});
  const [proName, setproName] = useState("");

  const { id } = useParams()

  useEffect(() => {

    axios.get(`http://localhost:8080/products/${id}`).then((res) => {

      console.log(res.data.data)
      setpro(res.data.data)
      console.log(proName)

    })

  }, [])


  return (
    <Box sx={{ backgroundColor: "black", height: "100vh", color: "white" }}>

      <h1>Edit Product number {id}</h1>


      {Object.keys(pro).slice(1,5).map((item) => {

        return (
          <form >
            <h2 > {item}</h2>
            <input type="text" name={proName} style={{ color: "black" }} placeholder={item.
// @ts-ignore
            price} />
            <input type="text" name="g" placeholder={item.
// @ts-ignore
            price} />
            <input type="text" name="d" placeholder={item.
// @ts-ignore
            items} />
            <input type="text" name="f" placeholder={item.
// @ts-ignore
            id} />

            </form>
            )


        })
      
        }


      
    </Box>
  );
}

export default EditProducts;
