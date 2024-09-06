import express, { json } from "express";
const PORT = process.env.PORT;
import mongoose from "mongoose";
// import Product from "./models/product.model.js";
import router from "./routes/product.route.js";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", router);

app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose
  .connect(
    "mongodb+srv://subhamkr5925:hOAEZkKei0kblFDg@backenddb.t7aav.mongodb.net/Picxcel_Gallery?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(8000, () => {
      console.log(`Sever is running on port 8000`);
    });
  })
  .catch(() => {
    console.log("Connction Failed");
  });
