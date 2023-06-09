require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// Configuração do App
const app = express();
app.use(express.json());
app.use(express.static("uploads"));

// Configuração do Banco de Dados
mongoose.connect(process.env.MONGODB_URL);
const Produto = require("./models/produto");

//swagger
const swagger = require("./swagger");
swagger(app);

// rotas
const produtosRoutes = require("./routes/produtos");
app.use(produtosRoutes);

// Escuta de eventos
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
  });