// VARIABLES
const modal = document.querySelector(".modal"),
  modalContent = document.querySelector(".modal-content"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modalContent.classList.add("slide-up");
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
});
