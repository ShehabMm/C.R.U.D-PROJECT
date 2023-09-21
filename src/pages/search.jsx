import React, { useState } from 'react';

const Search = () => {
  const [pro, setPro] = useState(["heater", "fridge", "cooker", "washingMachine"])
  const [data, setData] = useState("")

let fin = pro.filter((item)=>{return (item.toLowerCase().includes(data) )

})

  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <br />
      <input onChange={(eo) => {

        setData(eo.target.value)
        console.log(data)

      }} type="text" placeholder='type to search' style={{ color: "black" }} />
      <br /><br />




      {fin.map((item) => {

        return <ul>
          <li>{item}</li>
        </ul>

      })}
    </div>
  );
}

export default Search;
