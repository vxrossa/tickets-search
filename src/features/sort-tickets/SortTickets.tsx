import { Ticket } from "../../api/types";
import {
  useAppDispatch,
  useAppSelector,
} from "../../providers/ReduxProvider.types";
import { setSortType } from "./sort.model";
import "./style.css";

interface SortButton {
  id: string;
  title: string;
  field: keyof Ticket;
}

const buttons: SortButton[] = [
  {
    id: "cheapest",
    title: "Самый дешевый",
    field: "price",
  },
  {
    id: "fastest",
    title: "Самый быстрый",
    field: "duration",
  },
  {
    id: "optimal",
    title: "Самый оптимальный",
    field: "connectionAmount",
  },
];

function SortTickets() {
  const currentSortType = useAppSelector((state) => state.sorting.type);

  const dispatch = useAppDispatch();

  const handleClick = (type: string, field: keyof Ticket) =>
    dispatch(setSortType({ type, field }));

  return (
    <div className="sort-tickets">
      {buttons.map((button) => (
        <button
          onClick={() => handleClick(button.id, button.field)}
          key={button.id}
          className={
            currentSortType === button.id
              ? "sort-tickets__button_active"
              : "sort-tickets__button"
          }
        >
          {button.title}
        </button>
      ))}
    </div>
  );
}

export default SortTickets;
