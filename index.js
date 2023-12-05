const uniqueBtnEl = document.getElementById("unique-btn");
const uniqueBirthdayEl = document.getElementById("unique-birthday");
const uniqueResultEl = document.getElementById("unique-result");

function calculateUniqueAge() {
  const uniqueBirthdayValue = uniqueBirthdayEl.value;
  if (uniqueBirthdayValue === "") {
    alert("Please enter your birthdate");
  } else {
    const age = getUniqueAge(uniqueBirthdayValue);
    uniqueResultEl.innerText = `Your unique age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getUniqueAge(uniqueBirthdayValue) {
  const currentDate = new Date();
  const uniqueBirthdayDate = new Date(uniqueBirthdayValue);
  let age = currentDate.getFullYear() - uniqueBirthdayDate.getFullYear();
  const month = currentDate.getMonth() - uniqueBirthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < uniqueBirthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

uniqueBtnEl.addEventListener("click", calculateUniqueAge);
