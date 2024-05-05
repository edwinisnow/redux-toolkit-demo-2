import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}
const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: `id_${index}`,
            name,
            food: [""],
          })
        );
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationCard;
