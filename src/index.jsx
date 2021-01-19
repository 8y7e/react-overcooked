import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Panel from './components/panel';

import { OPTION_ESSENTIAL, OPTION_ANALYTICS } from './constants';
import lang from './index.en.translations';

import { STORAGE_KEY, readValue, storeValue, removeValue } from './utils';


const defaultOptions = [OPTION_ESSENTIAL, OPTION_ANALYTICS];

const Overcooked = ({ options, translations, children, onSelect, persist, ...props }) => {
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
    <Panel
      {...props}
      {...{ options, translations }}
      onSelect={handleSelect}
    >
      {children}
    </Panel>
  );
};

Overcooked.defaultProps = {
  options: defaultOptions,
  translations: lang,
  persist: true,
};

Overcooked.propTypes = {
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
