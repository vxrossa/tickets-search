import { ChangeEvent, useState, useEffect } from "react";
import { removeFilter, setFilter } from "../../entities/filter/filter.model";
import { getCompanyList } from "../../entities/ticket/ticket.model";
import { useAppDispatch } from "../../providers/ReduxProvider.types";
import "./style.css";

function FilterByCompanies() {
  const companyList = Array.from(getCompanyList());
  const [companies, setCompanies] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (companies.length > 0) {
      dispatch(
        setFilter({
          type: "companies",
          filterCb: (tickets) =>
            tickets.filter((ticket) => companies.includes(ticket.company)),
        })
      );
    } else {
      dispatch(removeFilter("companies"));
    }
  }, [companies]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const companyName = e.target.id;

    if (companies.includes(companyName)) {
      setCompanies(companies.filter((company) => company !== companyName));
    } else {
      setCompanies([...companies, companyName]);
    }
  };

  return (
    <div className="company-filter">
      Компании
      <div className="company-filter__list">
        {companyList?.map((company) => (
          <div key={company}>
            <label htmlFor={company}>{company}</label>
            <input type="checkbox" id={company} onChange={handleChange} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterByCompanies;
