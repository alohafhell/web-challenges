console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newToast = document.createElement("li");
  newToast.className = "toast-container__message";
  newToast.textContent = "This is a new toast message!";
  toastContainer.appendChild(newToast);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
});
