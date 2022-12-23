export const updateLocalStorageEntry = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageEntry = (key) => localStorage.getItem(key);
