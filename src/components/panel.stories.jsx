import Panel from './panel';

export default { title: 'Panel' };

const options = [
  {
    id: 1,
    title: 'Essential item',
    description: 'Essential item description',
    essential: true,
  },
  {
    id: 2,
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

export const RegularOption = () => (
  <Panel {...{ options, translations }} onSelect={handleSelect} />
);
