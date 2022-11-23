// selectors : document.querySelector('.container');


const container = document.querySelector('.container');
let gridSpace = 10;
let boxWidth = 600;

const addBoxes = () => {
    
    
    for (i=0; i<`${gridSpace * gridSpace}`; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = `width: ${boxWidth / gridSpace}px;`;

        container.appendChild(box);
        const boxes = document.querySelectorAll('div.box');
        boxes.forEach(box => box.addEventListener('mouseover', () => {
        
                box.classList.add('painted');
                    
                }));
        

    }
}
addBoxes();




const newGrid = document.querySelector('button');

newGrid.addEventListener('click', () => {
    for (i=0; i<`${gridSpace * gridSpace}`; i++){ 
        container.removeChild(container.firstChild);
    }
    
    gridSpace = prompt('How many squares? Between 0 - 100, please.');
    if(gridSpace === null){
        gridSpace = 4;
    }
addBoxes();

})







