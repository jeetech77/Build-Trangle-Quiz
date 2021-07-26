const userInput = document.querySelectorAll(".input-box");
const btnSumbit = document.querySelector('.btn-submit');
const outputPara = document.querySelector(".output")
btnSumbit.addEventListener("click", () => {
    let sum = 0;
    userInput.forEach(element => {
        let temp = Number(element.value);
        if (temp === 0) {
            sum = 0;
        } else {
            sum += temp;
        }
    })
    if (sum === 180) {
        outputPara.textContent = "Yay, These angles will make a traingle."
    } else if (sum === 0) {
        outputPara.textContent = "Please enter valid values.";
    } else {
        outputPara.textContent = "Oops, These angles can't make a traingle";
    }
})