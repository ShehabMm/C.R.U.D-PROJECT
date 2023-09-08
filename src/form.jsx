import { Box, Button, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { useRef, useState } from "react";
const Form = () => {

const [fill, setFill]=useState("")
const [fill2, setFill2]=useState("")
const [fill3, setFill3] = useState(false);
const ref = useRef()

const handleForm=(eo)=>{
eo.preventDefault()
  console.log(ref.current.value)

if (fill2==="") {

}else{
  setFill3(true)


}
}



  return (
    <Stack direction="column" className="form">
      <form  onSubmit={handleForm}  className="signIn">
        <Typography variant="h5">{fill3? "Message Sent":"Please add the following"} </Typography>

        <input
          placeholder="User Name"
          type="text"
          style={{
            width: "150px", 
            height: "30px",
            borderRadius: "5px",
            color: "black",
          }}
          onChange={(eo)=>{

setFill2(eo.target.value)
console.log(fill2)
          }}
        />
        <input
        ref={ref}
          placeholder="Email"
          type="text"
          style={{
            width: "150px",
            height: "30px",
            borderRadius: "5px",
            color: "black",
          }}
          onChange={(eo)=>{


setFill(eo.target.value)
console.log(fill)
          }}
        />

        <Button
          variant="outlined"
          color="error"
        
          type="submit"
        >
    
          Sign In
        </Button>
      </form>
    </Stack>
  );
};

export default Form;
