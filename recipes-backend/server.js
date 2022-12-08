const express = require("express");
const app = express();
const routes = require("./routes/routes");
const cors = require("cors");

app.use(cors({
    origin:"http://localhost:3000",
}));

//app.use(bodyParser.json());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=>console.log(`server is listen on port ${PORT}`));

module.exports = app;