// const nameChecker = null;
// const emailChecker = null;
// const ageChecker = null;

// const optionLiving = null;
// const recommend = null;
// const Frameworks = null;
// const suggestions = null;
// const submit = addEventListener('click', () => {
//     if (SubmitButtion ==  ) {
//         alert("Thank You for giving feedback");

//     }

// }
// );
// let nameId = document.querySelector("#Name");
// let emailId = document.querySelector("#Email");
// let ageId = document.querySelector("#Age");
// let selectOption = [
//   { Student: document.querySelector("#value_Student") },
//   { Intern: document.querySelector("#value_Intern") },
//   { Professional: document.querySelector("#value_Professional") },
//   { Other: document.querySelector("#value_Other") },
// ];
// let SubmitButtion = document.querySelector("#Submit_buttion");

// let ageinput = function buttonAgesumbit (aage,) {
//   if (SubmitButtion >= aage) {

//   }return aage === submit

// }

let SubmitButtion = document.querySelector("#Submit_buttion");
let ageId = document.querySelector("#Age");
const ageChecker = null;

SubmitButtion.addEventListener("click", () => {
  let ageValue = ageId.value;
  let ageNumber = 18;

  if (agevalue >= ageNumber) {
    alert("Thank You for giving feedback");
  } else {
    alert("Thank You for giving feedback But you are below 18!");
  }
});
