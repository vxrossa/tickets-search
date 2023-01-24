import { useState, ChangeEvent, useEffect } from "react";
import { removeFilter, setFilter } from "../../entities/filter/filter.model";
import { useAppDispatch } from "../../providers/ReduxProvider.types";
import "./style.css";

function FilterByConnections() {
  const [connections, setConnections] = useState<number | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (connections) {
      dispatch(
        setFilter({
          type: "connections",
          filterCb: (tickets) =>
            tickets.filter((ticket) => ticket.connectionAmount === connections),
        })
      );
    } else {
      dispatch(removeFilter("connections"));
    }
  }, [connections]);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConnections(+e.target.value);
  };

  return (
    <div className="connection-filter">
      Количество пересадок
      <div className="connection-filter__list">
        <div>
          <label htmlFor="no-connections">Без пересадок</label>
          <input
            value="0"
            type="radio"
            id="no-connections"
            name="connections"
            checked={connections === 0}
            onChange={handleRadioChange}
          />
        </div>
        <div>
          <label htmlFor="1-connections">1 пересадка</label>
          <input
            value="1"
            type="radio"
            id="1-connections"
            name="connections"
            checked={connections === 1}
            onChange={handleRadioChange}
          />
        </div>
        <div>
          <label htmlFor="2-connections">2 пересадки</label>
          <input
            value="2"
            type="radio"
            id="2-connections"
            name="connections"
            checked={connections === 2}
            onChange={handleRadioChange}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterByConnections;
