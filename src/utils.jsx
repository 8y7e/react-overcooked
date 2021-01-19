export const STORAGE_KEY = 'react-overcooked';

export const readValue = () => {
  try {
    const string = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(string);
  } catch (_e) {
    return null;
  }
};

export const storeValue = (value) => {
  try {
    const string = JSON.stringify(value);
    localStorage.setItem(STORAGE_KEY, string);
  } catch (_e) { /* nothing to do */ }
};

export const removeValue = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (_e) { /* nothing to do */ }
};
