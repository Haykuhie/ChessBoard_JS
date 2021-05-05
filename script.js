const board = document.querySelector('.board');
const boardletters= document.querySelector('.letters');
const boardnumbers= document.querySelector('.numbers');

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let index = 0;
let black = false;
let num =1;

for(i=0; i<8; i++){
    let letter = document.createElement('li')
    letter.textContent= letters[i]
    boardletters.appendChild(letter)
}

for(i=1; i<9; i++){
    let number = document.createElement('li')
    number.textContent= i
    boardnumbers.appendChild(number)
}
for(i=1; i<65;i++){
    const square= document.createElement('div')
    if(black){
        square.classList.add('square')
        square.classList.add('black')
        index++
        black= !black
    }else{
        square.classList.add('square')
        square.classList.add('white')
        index++
        black= !black
    }
    board.appendChild(square)
    if(index === 8){
        black = !black;
        index =0;
    }
}