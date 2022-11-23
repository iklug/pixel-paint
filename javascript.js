// selectors : document.querySelector('.container');

let gridSpace = 25;
let boxWidth = 600;

const addBoxes = () => {
    const container = document.querySelector('.container');
    
    for (i=0; i<`${gridSpace * gridSpace}`; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = `width: ${boxWidth / gridSpace}px;`;

        container.appendChild(box);
        console.log('hey');
    }
}
addBoxes();