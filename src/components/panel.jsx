import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';

import Button from './button';
import Option from './option';
import Checkbox from './checkbox';

import styles from './panel.module.scss';


const Panel = ({ className, options, translations, children, onSelect }) => {
  const rootClassName = cx(className, styles.root);

  const [isExpanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(() => (
    options.reduce((acc, { id }) => {
      acc[id] = true;
      return acc;
    }, {})
  ));

  const handleExpand = setExpanded.bind(null, true);
  const handleSave = () => onSelect(checked);
  const handleCheck = (id, event) => {
    const value = event.target.checked;
    setChecked((state) => ({ ...state, [id]: value }));
  };

  return (
    <section className={rootClassName}>
      <header>
        {translations.text}{' '}{children}
      </header>

      {isExpanded && (
        <ul className={styles.list}>
          {options.map(({ id, essential, ...texts }) => (
            <li key={id} className={styles.item}>
              <Option item={texts}>
                <Checkbox
                  checked={checked[id]}
                  onChange={handleCheck.bind(null, id)}
                  disabled={essential}
                />
              </Option>
            </li>
          ))}
        </ul>
      )}

      <footer className={styles.controls}>
        {!isExpanded && <Button onClick={handleExpand}>{translations.button_customize}</Button>}
        <Button className={styles.button} onClick={handleSave} primary>
          {translations.button_accept}
        </Button>
      </footer>
    </section>
  );
};

Panel.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      title: PropTypes.node,
      description: PropTypes.node,
      essential: PropTypes.bool,
    }),
  ).isRequired,

  translations: PropTypes.shape({
    text: PropTypes.node,
    button_accept: PropTypes.node,
    button_customize: PropTypes.node,
  }),

  children: PropTypes.node,
  onSelect: PropTypes.func,
};

export default Panel;
