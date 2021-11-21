const express = require("express");
const places = require("./routers/places.js");
const articles = require("./routers/articles.js");
const events = require("./routers/events.js");
const foods = require("./routers/foods.js");
const holidays = require("./routers/holidays.js");
const locations = require("./routers/locations.js");
const outfits = require("./routers/outfits.js");
const residences = require("./routers/residences.js");
const reviews = require("./routers/reviews.js");
const souvenirs = require("./routers/souvenirs.js");
const users = require("./routers/users.js");
const auth = require("./routers/auth.js");

const mongoose = require("mongoose");
  
//apidoc
// const swaggerJsDoc = require("swagger-jsdoc");

// middleware
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.ATLAS;

const swaggerUi = require("swagger-ui-express");
const docs = require('./docs/apidoc.json');
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));


app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use(express.json());

app.use("/places", places);
app.use("/articles", articles);
app.use("/events", events);
app.use("/foods", foods);
app.use("/holidays", holidays);
app.use("/locations", locations);
app.use("/outfits", outfits);
app.use("/residences", residences);
app.use("/reviews", reviews);
app.use("/souvenirs", souvenirs);
app.use("/users", users);
app.use("/auth", auth);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connect DB");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});
