import PropTypes from 'prop-types';

import styles from './option.module.scss';

const Option = ({ item: { title, description }, children }) => (
  <section className={styles.root}>
    <div className={styles.content}>
      <strong>{title}</strong>
      <small>{description}</small>
    </div>
    <aside className={styles.controls}>
      {children}
    </aside>
  </section>
);

Option.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.node,
    description: PropTypes.node,
  }).isRequired,
  children: PropTypes.node,
};

export default Option;
