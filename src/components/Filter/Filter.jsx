import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel}>
        <p className={css.filterLabelText}>Find contacts by name: </p>
        <input
          type="text"
          className={css.filterInput}
          name="filter"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
