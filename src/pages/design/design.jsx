import { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Design = ({ deleteAll, deleteItem, decreasement, increasement, allITems, state }) => {

const navigate = useNavigate()



  if (state == true) {
    return (
      <Box sx={{ mt: 2, width: { xs: "300px", sm: "60vw" } }}>
        <NavLink to="/posts">
          <Link to="/form">

            <Button variant="contained" color="primary">
              Sign in
            </Button> <br /> <br />
            
          </Link>

        </NavLink>
        <Button onClick={()=>{
navigate("/products")


            }} variant="contained" color="primary">

real products 
            </Button>

        <p
          style={{
            backgroundColor: "teal",
            padding: "20px",
            width: "300px",
            margin: "auto",
            marginTop: "20px",
            marginBottom: 50,
            borderRadius: 50,
          }}
        >
          {allITems.length == 0 ? "Empty"
            : "Total Payments" +
            allITems
              .map((each) => each.count * each.price)
              .reduce((a, b) => a + b) +
            "$"}
        </p>

        <Button
          onClick={() => {
            deleteAll();
          }}
          variant="outlined"
          color="error"
        >
          Empty the Cart
        </Button>

        <Button
          onClick={() => {
            location.reload();
          }}
          variant="outlined"
          color="error"
          sx={{ ml: 5 }}
        >
          Reset
        </Button>

        <TableContainer
          sx={{ margin: "auto", minWidth: "200px" }}
          component={Paper}
        >



          <Table sx={{ minWidth: 100 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Item </TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">ID</TableCell>

                <Stack spacing={3} direction="row" sx={{ marginLeft: 4 }}>
                  <TableCell> Increase --- Decrease --- Delete Item</TableCell>
                </Stack>

              </TableRow>
            </TableHead>
            <TableBody>
              {allITems.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.count}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>

                  <TableCell align="right">{row.id}</TableCell>

                  <Stack
                    spacing={3}
                    direction="row"
                    sx={{ marginLeft: 5, marginTop: 2.2 }}
                  >
                    <Button
                      onClick={() => {
                        increasement(row);
                        console.log("noo");
                      }}
                      variant="contained"
                      color="primary"
                      sx={{ padding: 0, width: 0, height: 20 }}
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => {
                        decreasement(row);
                      }}
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ padding: 0, width: 0, height: 20 }}
                    >
                      -
                    </Button>
                    <Button
                      onClick={() => {
                        deleteItem(row);
                      }}
                      variant="outlined"
                      sx={{
                        textAlign: "center",
                        padding: 0,
                        width: 0,
                        height: 20,
                      }}
                      size="small"
                    >
                      Del
                    </Button>
                  </Stack>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
};

export default Design;
