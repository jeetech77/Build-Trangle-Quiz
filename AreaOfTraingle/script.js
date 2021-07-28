const userInput = document.querySelectorAll(".input-box");
const btnSumbit = document.querySelector('.btn-submit');
const outputPara = document.querySelector(".output");
const userChoice = document.querySelectorAll(".userChoice");
const areaCalOption = document.querySelectorAll(".areaCalOption");
const horizentalLine = document.querySelector('.hrLine');
const domForms = document.forms;   // Selecting all the forms present in the document

//! To show hide Elements...

// Trying foreach method

userChoice.forEach((e, i) => {
    e.addEventListener('change', () => {
        if (i === 0)
        {
            displayAreaCal(areaCalOption[i], areaCalOption[1], areaCalOption[2]);
            outputPara.style.display = 'block';
            outputPara.textContent = `Area : √s * (s-a) * (s-b)* (s-c)`;
        }
        else if (i === 1) {
            displayAreaCal(areaCalOption[i], areaCalOption[0], areaCalOption[2]);
            outputPara.style.display='block';
            outputPara.textContent = `Area : 1/2 * base * height`;
        }
        else if (i === 2) {
            displayAreaCal(areaCalOption[i], areaCalOption[0], areaCalOption[1]);
            outputPara.style.display='block';
            outputPara.textContent = `Area : 1/2 * b * c * sin(A)`;
        }
    })
})

// userChoice[0].addEventListener('change', () => {
//     console.log("chaging 1");
//     displayAreaCal(areaCalOption[0], areaCalOption[1], areaCalOption[2]);
//     outputPara.style.display='block';
//     outputPara.textContent = `Area : √s * (s-a) * (s-b)* (s-c)`;
// })
// userChoice[1].addEventListener('change', () => {
//     console.log("chaging 2");
//     displayAreaCal(areaCalOption[1], areaCalOption[0], areaCalOption[2]);
//     outputPara.style.display='block';
//     outputPara.textContent = `Area : 1/2 * base * height`;
// })
// userChoice[2].addEventListener('change', () => {
//     displayAreaCal(areaCalOption[2], areaCalOption[1], areaCalOption[0]);
//     outputPara.style.display='block';
//     outputPara.textContent = `Area : 1/2 * b * c * sin(A)`;
//     console.log("chaging 3");
// })

function displayAreaCal(show, hide1, hide2) {
    horizentalLine.style.visibility = 'visible';
    show.style.display = "block";
    hide1.style.display = "none";
    hide2.style.display = "none";
}

// ! Handling process for result here

domForms[1].addEventListener('submit', e => {
    let firstSide = Number(e.target[0].value);
    let secondSide = Number(e.target[1].value);
    let thirdSide = Number(e.target[2].value);

    //Checking for valid traingle
    if ((firstSide + secondSide > thirdSide) && (secondSide + thirdSide > firstSide) && (thirdSide + firstSide > secondSide))
    {
        outputPara.style.borderColor = 'aqua';
        let temp = (firstSide + secondSide + thirdSide) / 2;
        let area = Math.sqrt(temp * (temp - firstSide)*(temp - secondSide)*(temp - thirdSide));
        outputPara.textContent = `Area will be : ${area.toFixed(3)}`;   // toFixed for decimal precision 
    }
    else {
        outputPara.textContent = "Enter valid sizes, Sum of two angles can't be less than third one.";
        outputPara.style.borderColor = 'red';
    }
})


domForms[2].addEventListener('submit', e => {
    let base = Number(e.target[0].value);
    let height = Number(e.target[1].value);
    let area = ((base + height) / 2);
    outputPara.textContent = `Area will be : ${area.toFixed(3)}`;
});

domForms[3].addEventListener('submit', e => {
    let firstSide = Number(e.target[0].value);
    let secondSide = Number(e.target[1].value);
    let angle = Number(e.target[2].value);
    let area = (((firstSide * secondSide) * (Math.sin((angle * Math.PI) / 180))) / 2);
    outputPara.textContent = `Area will be : ${area.toFixed(3)}`;
});