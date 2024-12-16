import { Link } from "react-router-dom";
import { TravelType } from "../types/travel.type";
import Button from "./ui/Button";
import Typography from "./ui/Typography";
import Modal from "./ui/Modal";

type TravelCardItemProps = {
    travel: TravelType
    travelList: TravelType[]
    setTravelList: (travelList: TravelType[]) => void
}

const TravelCardItem = ({ travel, travelList, setTravelList } : TravelCardItemProps) => {

  const handleDelete = () => {
      const index = travelList.indexOf(travel)
      travelList.splice(index, 1)
      setTravelList([...travelList])
  }

    return ( 
        <div className="shadow-md rounded-md">
          <Link to={`/travels/${travel.id}`}>
            <img src={travel.image} alt="" className="w-full" />
          </Link>
          
          <div className="p-4">
            <Link to={`/travels/${travel.id}`}>
              <Typography level={3}>
                  {travel.name}
              </Typography>
            </Link>
            <p>{travel?.description?.substring(10)}...</p>
          </div>

          <Modal>
            <div className="flex flex-col gap-4">
              <p className="text-slate-500">
                Êtes-vous sûr de vouloir supprimer ce voyage ?
              </p>
              <Button 
                text="Confirm to delete"
                variant="danger"
                onClick={handleDelete}
              />
            </div>
          </Modal>

        </div>
     );
}
 
export default TravelCardItem;