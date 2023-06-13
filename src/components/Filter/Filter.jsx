import css from 'components/Filter/Filter.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const Filter = ({ value, onChange }) => {
  const filter = useSelector(selectFilter);
  return (
    <label htmlFor="" className={css.label}>
      Find contacts by name
      <input
        className={css.filter}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
