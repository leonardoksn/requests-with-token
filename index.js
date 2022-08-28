import { getToken, getProducts } from "./controllers/auth/index.js";

getToken("kminchelle", "0lelplR")
  .then((res) => res.json())
  .then((json) => json.token)
  .then(getProducts)
  .then(console.log);