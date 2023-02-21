function getItem(key: string) {
  const result = localStorage.getItem(key);
  return result !== null ? result : null;
}
function setItem(key: string, value: any) {
  localStorage.setItem(key, value);
  return { key, value };
}

export { getItem, setItem };
