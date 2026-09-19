import { useEffect, useState } from "react";
import {
  ENGINES,
  EQUIPMENT,
  TRANSMISSIONS,
  VEHICLE_TYPES,
} from "../../constants/features";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { selectFilters } from "../../redux/filters/filtersSelectors";
import {
  initialFilters,
  resetFilters,
  setFilters,
} from "../../redux/filters/filtersSlice";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Filter from "../Filter/Filter";
import Icon from "../Icon/Icon";
import css from "./FilterBar.module.css";

const RADIO_GROUPS = [
  { field: "form", title: "Camper form", options: VEHICLE_TYPES },
  { field: "engine", title: "Engine", options: ENGINES },
  { field: "transmission", title: "Transmission", options: TRANSMISSIONS },
];

const FilterBar = () => {
  const dispatch = useAppDispatch();
  const appliedFilters = useAppSelector(selectFilters);
  const [draft, setDraft] = useState(appliedFilters);

  useEffect(() => {
    setDraft(appliedFilters);
  }, [appliedFilters]);

  const updateDraft = (field, value) =>
    setDraft((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilters(draft));
  };

  const handleClear = () => {
    setDraft(initialFilters);
    dispatch(resetFilters());
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.fields}>
        <label className={css.location}>
          <span className={css.label}>Location</span>
          <span className={css.locationField}>
            <input
              type="text"
              className={css.input}
              placeholder="City"
              value={draft.location}
              onChange={(event) => updateDraft("location", event.target.value)}
            />
            <Icon name="map" size={20} className={css.locationIcon} />
          </span>
        </label>

        <div className={css.filters}>
          <h2 className={css.heading}>Filters</h2>
          <div className={css.groups}>
            <fieldset className={css.group}>
              <legend className={css.label}>Equipment</legend>
              <div className={css.options}>
                {EQUIPMENT.map(({ key, label }) => (
                  <Checkbox
                    key={key}
                    name={key}
                    label={label}
                    checked={draft[key]}
                    onChange={(checked) => updateDraft(key, checked)}
                  />
                ))}
              </div>
            </fieldset>
            {RADIO_GROUPS.map(({ field, title, options }) => (
              <fieldset key={field} className={css.group}>
                <legend className={css.label}>{title}</legend>
                <div className={css.options}>
                  {options.map(({ value, label }) => (
                    <Filter
                      key={value}
                      name={field}
                      value={value}
                      label={label}
                      checked={draft[field] === value}
                      onChange={(selected) => updateDraft(field, selected)}
                    />
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
        </div>
      </div>

      <div className={css.actions}>
        <Button type="submit" fullWidth>
          Search
        </Button>
        <Button variant="outline" fullWidth onClick={handleClear}>
          <Icon name="close" size={24} />
          Clear filters
        </Button>
      </div>
    </form>
  );
};

export default FilterBar;
