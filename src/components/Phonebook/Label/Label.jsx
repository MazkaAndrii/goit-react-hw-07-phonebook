import PropTypes from 'prop-types';
import css from './Label.module.css';

const Label = ({ text, htmlFor, children }) => {
  return (
    <label className={css.label} htmlFor={htmlFor}>
      {text}
      {children}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
