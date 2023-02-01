document.getElementById("img-2").disabled = true;
document.getElementById("img-3").disabled = true;
document.getElementById("img-4").disabled = true;

let formInfoArray = [];
let diceScore = [];
let attempt = 2;
let RemainingDiceClick = 3;
let totalScore = 0;

function openFormFunction() {
  document.getElementById("form").classList.remove("hidden");
}

function submitForm() {
  let name = document.getElementById("name").value;
  let userName = document.getElementById("userName").value;
  let password = document.getElementById("password").value;
  if (name && userName && password) {
    let obj = {
      Name: name,
      UserName: userName,
      password: password,
    };

    formInfoArray.push(obj);
    document.getElementById("img-2").disabled = false;
    document.getElementById("img-1").disabled = true;
    alert(
      "Your Info is Submitted successfully! Click on the next image to view your info."
    );
    document.getElementById("form").classList.add("hidden");
  } else {
    alert(`Please fill all the fields.`);
  }
}
function displayFormInfoFunction() {
  document.getElementById(
    "info"
  ).innerText = `Name: ${formInfoArray[0].Name}, User Name: ${formInfoArray[0].UserName}, Email: ${formInfoArray[0].Email}`;
  document.getElementById("displayInfo").classList.remove("hidden");
  document.getElementById("img-3").disabled = false;
  document.getElementById("img-2").disabled = true;
}

function displayDiceWthScore() {
  document.getElementById("displayInfo").classList.add("hidden");
  attempt--;
  console.log(`attempt remaining= ${attempt}`);
  document.getElementById("attemptsLeft").innerText = attempt;
  document.getElementById("diceScore").classList.remove("hidden");
  document.getElementById("img-3").disabled = true;
}

function diceClick() {
  RemainingDiceClick--;
  document.getElementById("diceClicks").innerText = RemainingDiceClick;
  let randomNo = Math.floor(Math.random() * 6) + 1;
  totalScore += randomNo;
  document.getElementById("score").innerText = totalScore;
  if (RemainingDiceClick === 0) {
    document.getElementById("dice-Image").disabled = true;
    document.getElementById("score").innerText = totalScore;
    if (totalScore > 10) {
      alert(
        `hey many  Congratulations to you 🎉😊 Your  score is ${totalScore} greater than 10. now click next image to avail your coupon code.😊`
      );
      document.getElementById("diceScore").classList.add("hidden");
      document.getElementById("img-4").disabled = false;
    } else {
      if (attempt != 0) {
        alert(
          `O Ohhh!!! Your total score is ${totalScore} which is less than 10. don't worry Try once again!!😊`
        );
        document.getElementById("img-3").disabled = false;
        RemainingDiceClick = 3;
        totalScore = 0;
        document.getElementById("dice-Image").disabled = false;
        document.getElementById("diceScore").classList.add("hidden");
        console.log(`RemainingDiceClick = ${RemainingDiceClick}`);
        console.log(`totalScore = ${totalScore}`);
      } else {
        document.getElementById("score").innerText = totalScore;
        alert(
          `Bad luck !! Your total score is ${totalScore} which is not greater than 10 & You have exausted all your attempts. Please Start from begining!!!!`
        );
        document.getElementById("diceScore").classList.add("hidden");
        document.getElementById("tryAgainImage").classList.remove("hidden");
      }
    }
  }
}
function generateCouponCodeFunction() {
  document.getElementById("img-4").disabled = true;
  let coupon = "";
  for (let i = 0; i < 12; i++) {
    coupon += Math.floor(Math.random() * 10);
  }
  document.getElementById("congratsImage").classList.remove("hidden");
  alert(
    `  You have successfully generated a coupon. Your coupon code is ${coupon} Congratulations🎉😊`
  );
}
