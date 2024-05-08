import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const companyname="";
const categoryname="";
const product="";
const n=10;
const p=0;
const q=0;
const API_URL = "https://20.255.56.144/categories/product/company/{companyname}/category/{categoryname}/products=?top={n}&minPrice={p}&maxPrice={q}";
let productN={
  "productName": "",
  "price": 0,
  "rating":0,
  "discount": 0,
  "availability":""
};
app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    const cname=JSON.stringify(result.categoryname);
    const pname=JSON.stringify(result.cname);
    const pr=JSON.stringify(result.pname);
    const r=JSON.stringify(result.pname);
    const dis=JSON.stringify(result.pname);
    const avail=JSON.stringify(result.pname);
    productN={
      "productName": pname,
      "price": pr,
      "rating":r,
      "discount": dis,
      "availability":avail
    };
    res.send(productN);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
