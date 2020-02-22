const express = require("express");

const bodyParser = require("body-parser");
const routes = require("./rutas/index");
const cors = require("cors");
const PORT = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
app.use(bodyParser.json({limit: '50mb'}));

app.use("/film", routes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${ PORT }`);
});