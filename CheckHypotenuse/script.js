const domForms = document.forms;
const outputPara = document.querySelector(".output");
domForms[0].addEventListener('submit', e => {
    let baseLength = Number(e.target[0].value);
    let PerpendiLength = Number(e.target[1].value);
    let hypotenuse = Math.sqrt((baseLength * baseLength) + (PerpendiLength * PerpendiLength));
    outputPara.textContent = `Hypotenuse will be : ${hypotenuse.toFixed(3)}`;
})