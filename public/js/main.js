const submitButton = document.querySelector("#submitRating");
const ratingCard = document.querySelector("#ratingCard");
const thanksCard = document.querySelector("#thanksCard");
const ratingRadio = document.querySelectorAll(".rate-points");
const labelRate = document.querySelector("#ratePoint");

let points;

ratingRadio.forEach((rate, index) =>
  rate.addEventListener("click", () => {
    submitButton.disabled = false;
    points = index + 1;
    console.log(points);
  })
);

submitButton.addEventListener("click", () => {
  ratingCard.classList.add("hidden");
  labelRate.textContent = points;
  thanksCard.classList.remove("hidden");
});
