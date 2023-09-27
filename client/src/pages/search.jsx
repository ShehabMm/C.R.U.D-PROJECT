import React, { useState } from 'react';

const Search = () => {
  const [pro, setPro] = useState(["heater", "fridge", "cooker", "washingMachine"])
  const [data, setData] = useState("")
  const [check, setcheeck] = useState(false)


  let fin = pro.filter((item) => {
    return (item.toLowerCase().includes(data))

  })
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
console.log(...array1,...array2   )

const make = 'Ford';
const model = 'Mustang';
const car = { make, model };
console.log(car);
  return (
    <>  
    <div style={{ backgroundColor: "black", height: "100vh", textAlign:"center" }}>
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

      <div>
        <h2>{check?"welcome user": "plz log"       }  
</h2>
<button onClick={()=>{
setcheeck(!check)

}}>
  loooooooog
</button>





      </div>

    </div>


    </>
  );
}

export default Search;
