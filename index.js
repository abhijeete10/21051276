import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://20.255.56.144/test";
app.get("/numbers/e", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/e");
      res.send(Numbers: result);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });