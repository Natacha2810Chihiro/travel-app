import express from "express";
import cors from "cors";
import express, { Request, Response } from 'express'; 

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

app.get("/", (req : Request, res : Response) => {
  res.send("Heath check");
});

app.get("/travels", (req: Request, res: Response) => {
  res.send(travelList);
});



// pour ajouter un nouveau voyage : 
app.post("/travels", (req : Request, res : Response) => {
  const newTravel = req.body; // récupère les données envoyés dans le corps
  const newId = travelList.length ? travelList[travelList.length - 1].id + 1 ; //ici on lui genère un ID unique
  const travelWithId = { ...newTravel, id: newId}; // ici on ajoute l'id au voyage
  travelList.push(travelWithId); // on ajoute le voyage à la liste
  res.status(201).json(travelWithId);
  res.status(200).send("Create a travel");
});

// pour supprimer un voyage 
app.delete("/travels/:id", (req : Request, res : Response) => {

  const {id} = req.params; // on recupère l'Id du voyage a partir des paramètres de l'url 
  const index = travelList.findIndex(t => t.id === parseInt(id)); //ici on trouve l'index du voyage à supprimer

  if (index !== -1) {
    travelList.splice(index, 1); // ici on supprime le voyage de la liste
    res.status(204).send(); 
  } else {
    res.status(404).json({message: "Travel not found"});
  }
});

// pour récuperer un voyage spécifique
app.get("/travels/:id", (req: Request, res : Response) => {
  const {id} = req.params; //recupère l'id du voyage depuis les paarmèrres de l'url
  const travel = travelList.find(t => t.id === parseInt(id)); // on cherche le voyage avec l'id 

  if (travel) {
    res.json(travel); //on retounr le voyage trouvé
  } else {
    res.status(404).json ({message : "Travel not found"})
  } 
  res.send("Get one travel");
});


// pour mettre à jour un voyage : 
app.put("/travels/:id", (req : Request, res : Response) => {
  const { id } = req.params;
  const updatedTravel = req.body; // Les nouvelles données du voyage
  const index = travelList.findIndex(t => t.id === parseInt(id)); // ici on trouver l'index du voyage à mettre à jour

  if (index !== -1) {
    travelList[index] = { ...travelList[index], ...updatedTravel }; // on met à jour les propriétés du voyage
    res.json(travelList[index]); // on retourne le voyage mis à jour
  } else {
    res.status(404).json({ message: "Travel not found" });
  }
  res.send("Update a travel");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
