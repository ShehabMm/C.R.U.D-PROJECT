const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const EmployeeModel = require('./models/Employee')
const Article = require('./models/collection')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())




mongoose.connect(
  "mongodb://shehab:1234@ac-smhji2v-shard-00-00.kiiwcap.mongodb.net:27017,ac-smhji2v-shard-00-01.kiiwcap.mongodb.net:27017,ac-smhji2v-shard-00-02.kiiwcap.mongodb.net:27017/employee?ssl=true&replicaSet=atlas-jilp6g-shard-0&authSource=admin&retryWrites=true&w=majority"
)
  .then(() => {
    console.log("Connected to mongodb successfully");

    app.listen(8080, () => {
      console.log(`server started on port 8080"`);
    });
  })
  .catch((err) => {
    console.log(err);
  });



app.get("/", (req, res) => {
  res.send("API is running");
  console.log("API is running ok");
});




app.get("/products", async (req, res) => {

  try {

    const ali = await Article.find({})

    res.send({ data: ali })

  } catch (error) {

  }
})

app.get('/products/:id', async (req, res) => {

  try {

    const ta = await Article.findById(req.params.id)

    res.send({ data: ta })
  } catch (error) {

  }
})


  

  app.post("/register", async (req, res) => {

    try {
      const product = await EmployeeModel.create(req.body)
      res.status(200).json(product)
    } catch (err) {
      console.log(err.message)
      res.json({ message: err.message })
    }
  })

  app.post("/pro", async (req, res) => {

    try {
      const product = await Article.create(req.body)
      res.status(200).json(product)
    } catch (err) {
      console.log(err.message)
      res.json({ message: err.message })
    }
  })


  app.delete ('/pro/:id', async(req, res) => {
  

    try {
      const product = await Article.findByIdAndDelete(req.params.id)
    if (!product ) {
      return res.status(404).json({message:`can not find any product with ID ${req.params.id} `})
    }
    res.status(200).json(product)
    
    } catch (error) {
          res.json({ message: err.message })
    
    }
    
    })
    
    
