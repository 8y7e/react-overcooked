import Overcooked from './index';

export default { title: 'Overcooked' };

const options = [
  {
    title: 'Essential item',
    description: 'Essential item description',
    essential: true,
  },
  {
    title: 'Regular item',
    description: 'Regular item description',
  },
];

const translations = {
  text: 'Serius legal text',
  link: 'Click to expand.',
  button_accept: 'Accept button',
  button_customize: 'Customize button',
};

const handleSelect = (...args) => console.info('Selection: ', args);

export const AllDefaults = () => <Overcooked onSelect={handleSelect} />;
export const NotPersistingBanner = () => <Overcooked onSelect={handleSelect} persist={false} />;

export const NotPersistingCustomOptionsBanner = () => (
  <Overcooked options={options} onSelect={handleSelect} persist={false} />
);

export const NotPersistingCustomTranslationsBanner = () => (
  <Overcooked translations={translations} onSelect={handleSelect} persist={false} />
);

export const NotPersistingCustomContentBanner = () => (
  <Overcooked onSelect={handleSelect} persist={false}>
    This content may or may not be used in any legal or non legal way.
    The reader of this text, (referred to as Reader from now on) waives all
    his or her non mandatory reading and writing priviliges,
    available therein to our legal representative. Comprehension of the text herein by the
    Reader is not guaranteed.
  </Overcooked>
);
