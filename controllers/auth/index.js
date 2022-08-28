import fetch from "node-fetch";

export const getToken = async (username, password) => 
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  })

export const getProducts =  (token) =>  fetch("https://dummyjson.com/auth/products", {
    method: "GET" /* or POST/PUT/PATCH/DELETE */,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
