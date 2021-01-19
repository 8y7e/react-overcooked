React Overcooked
================

A small React based solution to notify your website users about your cookie policy and the use of third party cookies. Fully customizable, persists itself via [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and comes ready to run out of the box.

## Usage

Install as usual:

`npm install --save react-overcooked`

Then inside your application:

```javascript
import Overcooked from 'react-overcooked';

const MyComponent = () => {
  const handleSelect = (value) => console.log(value);
  return <Overcooked onSelect={handleSelect} />;
};
```

## Props

Full list of supported props:

 - `options`, array: an array of options to show, defaults to pre-built options - Essential and Analytics cookies

 - `translations`, object: an object containing translations in your preferred language
   - text, string: the text at the top of the panel
   - button_accept, string: the text on the "Accept" button
   - button_customize, string: the text on the "Customize" button

 - `children`, React node: this can also be used to show text at the top of the panel. Very useful if you need to link to your Cookie Policy page.
 - `onSelect`, function: a handler to be called with user's selection. Will be called again every time the component mounts when `persist` is set to `true`
 - `persist`, boolean: persists selection in LocalStorage and never shows the panel again

## Options

An option is simply an object:

 - `title`, string: the text for the option title
 - `description`, string: the text for the option description
 - `id`, string: a unique option identifier, will be used as a key prop and to identify selection
 - `essential`, boolean: when set to `true` the checkbox will always be `checked` and `disabled`

## Removing stored selection

Cleaning up LocalStorage is up to you, but we provide a convenient way to do it:

```javascript
import { removeValue } from 'react-overcooked';
removeValue();
// The persisted value is gone
```

## License

[MIT](./LICENSE)
