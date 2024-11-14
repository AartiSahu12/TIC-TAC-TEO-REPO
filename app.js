let boxes = document.querySelectorAll('.box1');
let resetbutton = document.querySelector('#resetbtn');
let newbutton = document.querySelector('#newbtn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turn = true;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('clicked')
        if (turn) {
            box.innerText = 'O';
            box.classList.add("colorO");
            turn = false;
        } else {
            box.innerText = 'X';
             box.classList.add("colorX");
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

checkWinner = () => {
    for (pattern of winPattern) {
        
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 =boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
            if (posval1 === posval2 && posval2 === posval3) {
                console.log('winner', posval1);
                showWinner(posval1);
            }
        }
    }
}
showWinner = (winner) => {
    msg.innerText = `congratulation winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};
disableBoxes = () => {
    for (box of boxes){
        box.disabled = true; 
    }
}
enableBoxes = () => {
    turn = true;
    for (box of boxes){
        box.disabled = false; 
        box.innerText = "";
    }
     msgContainer.classList.add('hide');
}
resetbutton.addEventListener('click', () => {
    console.log('testing');
    enableBoxes();
})
newbutton.addEventListener('click', () => {
    enableBoxes();
})