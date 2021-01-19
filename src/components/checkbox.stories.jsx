import Checkbox from './checkbox';

export default { title: 'Checkbox' };

export const UncheckedCheckbox = () => <Checkbox />;
export const CheckedCheckbox = () => <Checkbox defaultChecked />;
export const DisabledCheckbox = () => <Checkbox disabled />;
export const CheckedDisabledCheckbox = () => <Checkbox defaultChecked disabled />;
