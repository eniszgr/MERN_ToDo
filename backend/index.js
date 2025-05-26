//identifying
const express = require("express");
const cors = require("cors");
const db = require("./db");
const textRoute = require("./routes/textRoutes");
const port = 3000;
const app = express();


//usage
app.use(cors());
app.use(express.json());

//db connection
db();



//routes
app.use('/text', textRoute);

app.listen(port, () => {
  console.log(`Backend URL: http://localhost:${port}`);
});