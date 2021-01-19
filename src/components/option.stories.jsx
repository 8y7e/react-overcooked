import Option from './option';
import Checkbox from './checkbox';

export default { title: 'Option' };

const item = {
  title: 'Regular item',
  description: 'Regular item description',
};

export const RegularOption = () => <Option item={item} />;

export const OnlyTitleOption = () => (
  <Option item={{ title: item.title }} />
);

export const OnlyDescriptionOption = () => (
  <Option item={{ description: item.description }} />
);

export const OptionWithCheckbox = () => (
  <Option item={item}>
    <Checkbox />
  </Option>
);
