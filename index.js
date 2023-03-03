console.clear();


/****** create constant for bookmark container */
const bookmark = document.querySelector(".bookmark");

bookmark.addEventListener("click", () => {
  const img = bookmark.querySelectorAll(".question-card__icon");
  img.forEach(element => {
    element.classList.toggle("question-card__icon--active")
  });
})
