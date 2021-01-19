import PropTypes from 'prop-types';
import cx from 'clsx';

import Checkmark from './checkmark';
import styles from './checkbox.module.scss';


const Checkbox = ({ disabled, checked, defaultChecked, ...props }) => (
  <span className={
    cx(styles.root, {
      [styles.disabled]: disabled,
      [styles.checked]: checked || defaultChecked,
    })
  }
  >
    <input {...props} {...{ disabled, checked, defaultChecked }} type="checkbox" />
    <Checkmark className={styles.checkmark} />
  </span>
);

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
};

export default Checkbox;
