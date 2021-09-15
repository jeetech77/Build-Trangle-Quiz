const userInput = document.querySelectorAll(".input-box");
const btnSumbit = document.querySelector('.btn-submit');
const outputPara = document.querySelector(".output")
btnSumbit.addEventListener("click", () => {
    let firstAngle = Number(userInput[0].value);
    let secondAngle = Number(userInput[1].value);
    let thirdAngle = Number(userInput[2].value);
    sum = firstAngle + secondAngle + thirdAngle;
    if (firstAngle > 0 && secondAngle > 0 && thirdAngle > 0) {
        outputPara.style.borderColor = 'aqua';
        if (sum === 180) {
            outputPara.textContent = "Yay, These angles will make a traingle."
        } else if (sum === 0) {
            outputPara.textContent = "Please enter valid values.";
        } else {
            outputPara.textContent = "Oops, These angles can't make a traingle";
        }
    }
    else {
        outputPara.textContent = "Enter values grater then 0.";
        outputPara.style.borderColor = 'red';
    }
})