import css from './Title.module.css';

const Filter = ({ children }) => {
  return <p className={css.title}>{children}</p>;
};

export default Filter;
