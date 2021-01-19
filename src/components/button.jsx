import PropTypes from 'prop-types';
import cx from 'clsx';

import styles from './button.module.scss';


const Button = ({ className, children, primary, ...props }) => (
  <span {...props} className={cx(styles.root, className, { [styles.primary]: primary })}>
    {children}
  </span>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  primary: PropTypes.bool,
};

export default Button;
