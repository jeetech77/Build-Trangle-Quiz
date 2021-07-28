const domForms = document.forms[0];
const inputs = document.getElementsByTagName("input");
const allOptions = document.querySelectorAll(".opt");
const outputPara = document.querySelector(".output");

let userAnswers = [];
const correctAns = [
    "radio2", "radio4", "radio5", "radio7", "radio9", "radio13", "radio16", "radio18", "radio22", "radio25"
];

domForms.addEventListener('submit', () => {

    // Iterating to every single input of documents
    for (const iterator of inputs) {
        if (iterator.checked===true) {
            userAnswers.push(iterator.id);   
        }
    }
    
    checkAns();
    outputPara.textContent = `Your total score is : ${score}`;
    
})

// ! Checking answers here

let score = 0;
function checkAns() {
    userAnswers.forEach((element, index) => {
        if (element===correctAns[index]) {
            console.log("Right answer", index, element);
            allOptions[index].style.backgroundColor = "#1d9e1d9e";
            score++;
        }
        else {
            allOptions[index].style.backgroundColor = "#bb1818c9";
        }
    })
    return score;
}

