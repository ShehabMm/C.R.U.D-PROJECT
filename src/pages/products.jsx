import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Products = () => {
  const [pro, setPro] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    console.log("Ggg")
    axios.get("http://localhost:8080/products").then((data) => {
      setPro(data.data.data);
    });
  }, [update]);
  const navigate = useNavigate();
  return (
    <Box
      sx={{ display:"flex", justifyContent: "center", textAlign: "center",  }}
    >
      <Stack
        direction={"column"}
        sx={{   width:"200px", height:"100px", position:"absolute"}}
      >
        <Typography variant="h6" color="initial" >
          Products details{" "}
        </Typography>
        <Link to="/products/AddProduct">
        
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{  fontSize: "10px" }}
        >
          Add a new Product
        </Button>
        </Link>
      </Stack>

      <TableContainer
        component={Paper}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          mt: 15,
          maxWidth: 850 
        }}
      >
        <Table sx={{ maxWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">items</TableCell>
              <TableCell align="right">Id</TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {pro.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.items}</TableCell>

                <TableCell align="right">{row.id}</TableCell>

                <Stack direction={"row"} spacing={2} mt={1} ml={15}>
                  <Button
                    onClick={() => {
                      navigate(`/products/details/${row._id}`);
                    }}
                    variant="contained"
                    color="error"
                  >
                    View
                  </Button>
                  <Button variant="contained" color="error">
                    edit
                  </Button>
                  <Button onClick={()=>{

axios.delete(`http://localhost:8080/pro/${row._id}`).then((res)=>{
console.log(res)


})
setUpdate(!update)       }}  variant="contained" color="error">
                    delete
                  </Button>
                </Stack>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Products;
