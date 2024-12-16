import express from "express";
import cors from "cors";

const travelList = [
  {
    id: 1,
    name: "Paris",
    city: "Paris",
    country: "France",
    image:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    description:
      "Paris is known for its iconic landmarks like the Eiffel Tower, art museums like the Louvre, and its romantic atmosphere.",
  },
  {
    id: 2,
    name: "New York City",
    city: "New York",
    country: "USA",
    image:
      "https://www.planetware.com/photos-large/USNY/new-york-city-empire-state-building.jpg",
    description:
      "New York City is famous for its skyline, Central Park, Times Square, and vibrant cultural life.",
  },
];

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

app.get("/", (req, res) => {
  res.send("Heath check");
});

app.get("/travels", (req, res) => {
  res.send(travelList);
});

app.post("/travels", (req, res) => {
  console.log("POST REQUEST : ", req.body);
  // create const travel with body
  // add id param to object travel
  // insert travel in travelList
  // send back add travel object
  res.status(200).send("Create a travel");
});

app.delete("/travels/:id", (req, res) => {
  console.log("DELETE REQUEST : ", req.params);
  // create conts id with req.params.id
  // delete travel with id in to travelList
  // send back succes to delete
  res.send("Delete a travel");
});

app.get("/travels/:id", (req, res) => {
  res.send("Get one travel");
});

app.put("/travels/:id", (req, res) => {
  res.send("Update a travel");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
