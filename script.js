const firstAngle = document.querySelector(".text-container span:nth-child(1)");
const secondAngle = document.querySelector(".text-container span:nth-child(2)");
const thirdAngle = document.querySelector(".text-container span:nth-child(3)");
const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector(".check-btn");
const nextBtn = document.querySelector(".next-btn");
const outputArea = document.querySelector(".output-area");

let anglesDictonary = [
    {
        angle: [80, 40, 60],
        ans: "YES"
    },
    {
        angle: [100, 40, 40],
        ans: "NO"
    },
    {
        angle: [65, 65, 40],
        ans: "YES"
    },
    {
        angle: [120, 30, 30],
        ans: "NO"
    }
]
let qusNum = 0;

checkBtn.addEventListener('click', () => {
    let userAns = userInput.value.toUpperCase();
    console.log(userAns);
    if (userAns==='') {
        outputArea.innerHTML="Please write your answer above."
        outputArea.style.backgroundColor = "#c04545";
        outputArea.style.boxShadow ="0px 5px 5px rgb(255, 72, 0);"
        return;
    }
    let ans = anglesDictonary[qusNum].ans;
    if (userAns === ans) {
        outputArea.innerHTML = `Yay, right one.`;
        outputArea.style.backgroundColor = "#5cdd5c"
    }
    else {
        outputArea.innerHTML = `Oops! wrong one.`;
        outputArea.style.backgroundColor = "#c04545"
    }
    nextQus();
    userInput.value='';
})

userInput.addEventListener('focus',()=>{
    outputArea.innerHTML="";
    outputArea.style.backgroundColor="inherit";
})

function nextQus() {
    qusNum = qusNum + 1;
    if (qusNum < 5) {
        renderQus(qusNum)
    }
    else {
        outputArea.innerHTML = `This is the last qusetion.`
        outputArea.style.backgroundColor = '#c04545';
    }
}

function renderQus(qusNum) {
    firstAngle.innerHTML = `${anglesDictonary[qusNum].angle[0]}`
    secondAngle.innerHTML = `${anglesDictonary[qusNum].angle[1]}`
    thirdAngle.innerHTML = `${anglesDictonary[qusNum].angle[2]}`
    qusNum = qusNum + 1;
}
renderQus(qusNum);