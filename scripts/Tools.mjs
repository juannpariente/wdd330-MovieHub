export function renderListWithTemplate(template, parentElement, list, position = "afterbegin", clear = false) {
  const cards = list.map(template).join("");
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, cards);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
