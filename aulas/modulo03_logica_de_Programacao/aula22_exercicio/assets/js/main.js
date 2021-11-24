const paragrafos = document.querySelector('paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgrounColorBody = estilosBody.backgroundColor;

setColorText(backgrounColorBody, ps);

function setColorText(color, text) {
    for (let p of text) {
        console.log(p);
        p.setAttribute("style", `background: ${color}; color: white;`)
    }
}
