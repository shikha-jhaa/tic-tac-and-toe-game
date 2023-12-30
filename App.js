// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgcontainer = document.querySelector(".msg-container")
// let msg = document.querySelector("#msg");
// let turn0 = true;//playerx, player0
// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];
// const ResetGame = ()=>{
//     turn0 = true;
//     unabledboxes();
//     msgcontainer.classList.add("hide");
// }

// boxes.forEach((box) =>{
//     box.addEventListener("click",()=>{
//         if (turn0){//player0
//             box.innerText = "0";
//             turn0 = false;
//         } else{//playerx
//             box.innerText = "x";
//             turn0 = true;
//         }
//         box.disabled = true;
//         checkWinner();
//     });
// });
// const disabledboxes =()=>{
//     for(let box of boxes){
//         box.disabled = true;
//     }
// }
// const unabledboxes =()=>{
//     for(let box of boxes){
//         box.disabled = false;
//         box.innerText = " ";
//     }
// }
// const showWinner = (winner)=>{
//     msg.innerText= `congratulations, winner is ${winner}`;
//     msgcontainer.classList.remove("hide");
//     disabledboxes();
// }
// const checkWinner= ()=>{
//     for( let pattern of winPatterns){
//             let pos1value = boxes[pattern[0]].innerText;
//             let pos2value = boxes[pattern[1]].innerText; 
//             let pos3value = boxes[pattern[2]].innerText;
//             if(pos1value !="" &&pos2value !=""&&pos3value !="" ){
//                 if(pos1value === pos2value &&pos2value === pos3value){
//                     showWinner(pos1value);
//                 }
//             }
//     }
// };
// newGameBtn.addEventListener("click",ResetGame);
// resetBtn.addEventListener("click",ResetGame);
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; // playerx, player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    unabledBoxes(); // Fix typo here
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            // player0
            box.innerText = "0";
            turn0 = false;
        } else {
            // playerx
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const unabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = " ";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes(); // Fix typo here
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;
        if (pos1value !== "" && pos2value !== "" && pos3value !== "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                showWinner(pos1value);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame); // Use camelCase for consistency
resetBtn.addEventListener("click", resetGame);
