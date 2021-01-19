import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';

import Panel from './components/panel';

import { OPTION_ESSENTIAL, OPTION_ANALYTICS } from './constants';
import lang from './index.en.translations';

import { STORAGE_KEY, readValue, storeValue, removeValue } from './utils';
import styles from './index.module.scss';

const defaultOptions = [OPTION_ESSENTIAL, OPTION_ANALYTICS];

const Overcooked = ({ className, options, translations, children, onSelect, persist }) => {
  const [isVisible, setVisible] = useState(!persist);

  useEffect(() => {
    if (!persist) return;
    const previousValue = readValue();
    if (previousValue) return onSelect?.(previousValue);
    setVisible(true);
  }, [persist, onSelect]);

  const handleSelect = (value) => {
    if (persist) storeValue(value);
    onSelect?.(value);
    setVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={cx(className, styles.root)}>
      <Panel
        {...{ options, translations }}
        onSelect={handleSelect}
      >
        {children}
      </Panel>
    </div>
  );
};

Overcooked.defaultProps = {
  options: defaultOptions,
  translations: lang,
  persist: true,
};

Overcooked.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,

  translations: PropTypes.shape({
    text: PropTypes.node,
    button_accept: PropTypes.node,
    button_customize: PropTypes.node,
  }),

  children: PropTypes.node,
  onSelect: PropTypes.func,
  persist: PropTypes.bool,
};

export default Overcooked;
export { OPTION_ESSENTIAL, OPTION_ANALYTICS, STORAGE_KEY, removeValue };
