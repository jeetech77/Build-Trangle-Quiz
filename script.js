const firstAngle = document.querySelector(".text-container span:nth-child(1)");
const secondAngle = document.querySelector(".text-container span:nth-child(2)");
const thirdAngle = document.querySelector(".text-container span:nth-child(3)");
const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector(".check-btn");
const nextBtn = document.querySelector(".next-btn");
var anglesDictonary = [
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
    let ans = anglesDictonary[qusNum].ans;
    if (userAns===ans) {
        console.log("YES");
    }
    else{
        console.log("No");
    }
})
nextBtn.addEventListener('click', () => {
    qusNum = qusNum + 1;
    if (qusNum < 4) {
        renderQus(qusNum)
    }
    else {
        console.log("Last one");
    }
})

function renderQus(qusNum) {
    firstAngle.innerHTML = `${anglesDictonary[qusNum].angle[0]}`
    secondAngle.innerHTML = `${anglesDictonary[qusNum].angle[1]}`
    thirdAngle.innerHTML = `${anglesDictonary[qusNum].angle[2]}`
    qusNum = qusNum + 1;
}
renderQus(qusNum);