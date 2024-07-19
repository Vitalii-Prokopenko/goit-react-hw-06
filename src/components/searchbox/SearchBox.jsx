import { useDispatch, useSelector } from "react-redux";
import css from "./searchbox.module.css";

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({
      type: "filter/change",
      payload: event.target.value,
    });
  };

  return (
    <>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.filterField}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;