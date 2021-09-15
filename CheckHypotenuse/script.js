const domForms = document.forms;
const outputPara = document.querySelector(".output");
domForms[0].addEventListener('submit', e => {
    let baseLength = Number(e.target[0].value);
    let prepLength = Number(e.target[1].value);
    if(baseLength>0&&prepLength>0){
        let hypotenuse = Math.sqrt((baseLength * baseLength) + (prepLength * prepLength));
        outputPara.textContent = `Hypotenuse will be : ${hypotenuse.toFixed(3)}`;
        outputPara.style.borderColor = 'aqua';
    }
    else {
        outputPara.textContent = "Enter values grater then 0.";
        outputPara.style.borderColor = 'red';
    }
})