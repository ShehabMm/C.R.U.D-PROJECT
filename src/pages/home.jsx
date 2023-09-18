import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "./theme/theme";
import Design from "./design/design";
import Nav from "../components/nav/nav";
import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import data from "./data/data.json";
import Swal from "sweetalert2";

function Home() {
  const [mode, setMode] = useState("dark");
  // @ts-ignore
  const [allITems, setAllitems] = useState(data);

  const [state, setState] = useState(true);



  /////All functions //////////////////////



  //  increse quantity function /////////
  const increasement = (plus) => {
    let newSh = allITems.map((it) => {
      if (it.id == plus.id) {
        plus.count++;
      }
      return it;
    });
    setAllitems(newSh);
  };
  /////////////////////////////

  //  decrease quantity function////////
  const decreasement = (plus) => {
    let newSh = allITems.map((it) => {
      if (it.id == plus.id) {
        if (plus.count > 0) {
          plus.count--;
        }
      }
      return it;
    });
    setAllitems(newSh);
  };
  ////////////////////////

  // delete one item function/////////

  const deleteItem = (deleted) => {
    let filtered = allITems.filter((each) => {

      if (each.id !== deleted.id) {

        return each

      } else {
        each.count = 1

      }

    })
    setAllitems(filtered);
    Swal.fire({
      title: `${deleted.name} has been deleted`, timer: 500
    })

  };

  /////////////////////////////

  // delete all items functions
  const deleteAll = () => {
    setState(false);
  };

  ////////////////////////////





  ///// add one item functions
  const addItem = (obj) => {
    console.log(obj);
    let check = allITems.some((it) => {
      return (it.id === obj.id)
    });
    console.log(check)


    if (check) {

      let all = allITems.map((each) => {
        if (each.id === obj.id) {
          each.count++
        } return each

      })

      setAllitems(all)


    } else {

      setAllitems([...allITems, obj])


    }





  };
  ////////////////////////////////////////


  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Nav setMode={setMode} addItem={addItem} allITems={allITems} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          overflow: "none",
          width: "100vw",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          height: "92.5vh",
          backgroundColor: theme.palette.common.black,
        }}
        className="mobile"
      >
        <Typography color="error" variant="h4">
          Let&lsquo;s do it
        </Typography>

        <Design increasement={increasement} deleteAll={deleteAll} deleteItem={deleteItem} decreasement={decreasement} allITems={allITems} state={state} />
      </Box>
    </ThemeProvider>
  );
}

export default Home;
