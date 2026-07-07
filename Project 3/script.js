let count = 0;
function increase() {
  count++;

  document.getElementById("count").innerText = count;
}

function decrease() {
  count--;
  document.getElementById("count").innerText = count;
}

function resetCount() {
  count = 0;
  document.getElementById("count").innerText = count;
}

const textInput = document.querySelector("textarea");

const charCount = document.getElementById("charCount");

if (textInput) {
  textInput.addEventListener("input", () => {
    charCount.textContent = textInput.value.length;
  });
}

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }
        else{
            answer.style.display = "block";
        }

    });

});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerText = "🌙 Dark Mode";
    }
    else{
        themeBtn.innerText = "☀️ Light Mode";
    }

});

const colorBtn =
document.getElementById("colorBtn");

const colorCode =
document.getElementById("colorCode");

colorBtn.addEventListener("click",()=>{

    const randomColor =
    "#" +
    Math.floor(
    Math.random()*16777215
    ).toString(16);

    document.body.style.background =
    randomColor;

    colorCode.innerText =
    randomColor;

});
function updateClock(){

    const now = new Date();

    document.getElementById("clock")
    .innerText =
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();