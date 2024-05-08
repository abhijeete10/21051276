import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://20.255.56.144/test";
let text={"numbers": [],
  "windowPrevState":[],
  "WindowCurrState":[],
  "avg":0
};
const windowsize=5;
app.get("/numbers/e", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/even");
      const num=JSON.stringify(result.numbers);
      text={"numbers": num,
  "windowPrevState":WindowCurrState,
  "WindowCurrState":num,
  "avg":num/windowsize
};
      res.send(text);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  app.get("/numbers/f", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/fibo");
      const num=JSON.stringify(result.numbers);
      text={"numbers": num,
  "windowPrevState":WindowCurrState,
  "WindowCurrState":num,
  "avg":num/windowsize
};
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  app.get("/numbers/r", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/rand");
      const num=JSON.stringify(result.numbers);
      text={"numbers": num,
  "windowPrevState":WindowCurrState,
  "WindowCurrState":num,
  "avg":num/windowsize
};
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  app.get("/numbers/p", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/primes");
      const num=JSON.stringify(result.numbers);
      text={"numbers": num,
  "windowPrevState":WindowCurrState,
  "WindowCurrState":num,
  "avg":num/windowsize
};
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  