import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TravelType } from "../types/travel.type";
import Typography from "./ui/Typography";
import TravelList from "./TravelList";
import Button from "./ui/Button";

const SingleTravelPage = () => {
    const { id } = useParams()
    const [travel, setTravel] = useState<TravelType>({})
    const [travelList, setTravelList] = useState<TravelType[]>([])
    const [limit, setLimit] = useState<number>(3)    

    useEffect(() => {
        // Uniquement lorsque l'id change
        fetchTravel()
    }, [id])

    useEffect(() => {
        // Chargement des travels si l'id change (changement de page) ou  si on appuis sur le bouton show more
        fetchTravelList()
    }, [id, limit])

    const fetchTravelList = async () => {
        const response = await fetch("/travels.json")
        const data = await response.json()

        const filterTravelList = data.filter((travel: TravelType) => travel.id !== Number(id))
        const limitTravelList = filterTravelList.slice(0, limit)

        setTravelList(limitTravelList)
    }

    const fetchTravel = async () => {
        const response = await fetch("/travels.json")
        const travelList = await response.json()
        const findTravel = travelList.find((travel: TravelType) => travel.id === Number(id))
        setTravel(findTravel)
    }

    return ( 
        <div  className="container mx-auto">
            <Typography
                level={1}
            >
                {travel.name}
            </Typography>

            <img src={travel.image} alt="" />

            <p>
                {travel.description}
            </p>

            <div className="mt-20 flex items-center flex-col gap-10">
                <TravelList 
                    travelList={travelList}
                    setTravelList={setTravelList}
                />
                <Button 
                    text="Load more"
                    onClick={() => setLimit(limit + 3)}
                />
            </div>
        </div>
     );
}

export default SingleTravelPage;