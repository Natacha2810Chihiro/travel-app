import { useEffect, useState } from "react";
// useState et useEffect (fournis par React) permettent de gérer les données et effectuer actions quand une page s'affiche ou se met à jour
import { TravelType } from "./types/travel.type"; // definition du type de données qu'on attend. 
import TravelFormAdd from "./components/TravelFormAdd"; // le reste des composants qu'on utilise dans le code donc on les importent ici
import Typography from "./components/ui/Typography";
import TravelList from "./components/TravelList";

function App() {
  const [counter, setCounter] = useState(0);
  const [travelList, setTravelList] = useState<TravelType[]>([]);

  useEffect(() => {
    console.log("Mounted");

    fetchTravelList();
  }, []);

  const fetchTravelList = async () => {
    const response = await fetch("http://localhost:8000/travels");
    const data = await response.json();
    setTravelList(data);
  };

  return (
    <div className="container mx-auto">
      <Typography level={1}>Travel App</Typography>

      <TravelFormAdd travelList={travelList} setTravelList={setTravelList} />

      <button
        onClick={() => {
          console.log("Click button");
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        Number counter : {counter}
      </button>

      <TravelList travelList={travelList} setTravelList={setTravelList} />
    </div>
  );
}

export default App;
