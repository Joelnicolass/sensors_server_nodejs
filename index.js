const express = require("express");
const sensorsRouter = require("./api/sensorsAPI");

//CONFIGURACION
const app = express();
const port = process.env.PORT || 5000;

//MIDDLEWARES

//Uso de Cors.
app.use(require("cors")());

app.use(express.urlencoded());
app.use(express.json());

// Desarrollo APIS lógica de negocio
//ROUTES

app.use("/sensors", sensorsRouter);

//Error page
app.get("*", (req, res) => {
  res.status(404).send({ error: "Invalid request" });
});

app.listen(port, () => {
  console.log("listening server on port ", port);
});
