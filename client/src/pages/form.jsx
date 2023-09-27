import { Box, Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User } from "./context/context"




const Form = () => {
  const [email, setEmail] = useState("");
  const [psw, setpsw] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPsw, setCheckpsw] = useState(false);
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const navigate = useNavigate();
  const context = useContext(User);
  console.log(context)
  const handleSubmit = (eo) => {
    eo.preventDefault();
    if (!reg.test(email)) {
      setCheckEmail(true);
    } else setCheckEmail(false);

    if (psw == "") {
      setCheckpsw(true);

      // @ts-ignore



    } else if (reg.test(email) == true && checkPsw == false) {

      navigate("/")
      axios.post("http://localhost:8080/register", { email, psw }).then((res) => {

        console.log(res)


      }).catch((err) => {

        console.log(err)
      })


    }


    else {
      setCheckpsw(false);

    }







  };


  return (
    <Box
      sx={{
        mt: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}

    >

      <Stack
        component="form"
        direction="column"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          error={checkEmail}
          onChange={(eo) => {
            setEmail(eo.target.value);

          }}
        />

        <TextField
          error={checkPsw}
          id="outlined-password-input"
          label="Password"
          type="password"
          defaultValue={psw}
          autoComplete="current-password"
          onChange={(eo) => {
            setpsw(eo.target.value);
          }}
        />

        <Button variant="contained" size="small" type="submit" onClick={() => {

          // @ts-ignore
          context.setAuth({ "Email": email, "Pass": psw })

          console.log(context)

        }}>
          Login
        </Button>
        <NavLink to="/" style={{ textAlign: "center" }}>

          <Button size="small"  >Home</Button>

        </NavLink>

      </Stack>
    </Box>
  );

};

export default Form;
