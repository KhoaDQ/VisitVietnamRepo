import express from "express";
import places from "./routers/places.js";
import articles from "./routers/articles.js";
import events from "./routers/events.js";
import foods from "./routers/foods.js";
import holidays from "./routers/holidays.js";
import locations from "./routers/locations.js";
import outfits from "./routers/outfits.js";
import residences from "./routers/residences.js";
import reviews from "./routers/reviews.js";
import souvenirs from "./routers/souvenirs.js";
import users from "./routers/users.js";
import auth from "./routers/auth.js";

import mongoose from "mongoose";
  
//apidoc
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// middleware
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.ATLAS;

//swagger
const swaggerOptions = {
  definition: {
    components: {},
    openapi: "3.0.0",
    info: {
      title: "Customer API",
      version: "1.0.0",
      description: "Customer API Information",
    },
    servers: [
      { url: "http://localhost:5000" },
    ],
  },
  apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
