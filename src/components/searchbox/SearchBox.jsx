import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlise";
import css from "./searchbox.module.css";

const SearchBox = () => {
  const selectNameFilter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.filterField}
        type="text"
        name="filter"
        value={selectNameFilter}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
