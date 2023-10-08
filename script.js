window.onload = () => {
  const button = document.querySelector("#btn");
  button.addEventListener("click", calculateBmi);
};

function calculateBmi() {
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#result");

  if (!height || isNaN(height) || height < 0) {
    result.innerText = "Please provide a valid height";
    return;
  } else if (!weight || isNaN(weight) || weight < 0) {
    result.innerText = "Please provide a valid weight";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.5) {
    result.innerHTML = `Your bmi is ${bmi} which means youre <strong>under weight</strong>`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.innerHTML = `Your bmi is ${bmi} which means youre <strong>normal weight</strong>`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML = `Your bmi is ${bmi} which means youre <strong>overweight</strong>`;
  } else {
    result.innerHTML = `Your bmi is ${bmi} which means youre <strong>obesity</strong>`;
  }
}
