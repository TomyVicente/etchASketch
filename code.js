//Plan
// Create a 16 x 16 grid of divs with JS
//  make a for loop creating 16x16 times new divs with the class grid and adding it inside a div .container on the html 
// Make it look like a grid with flexbox
// Set a hoover effect so when the mouse pass arround the divs will change the color
//Add a button to the top of the page that will send a popup asking for how many squares the user wants while is less than 100
let color = "black"
let click = true;
function populateBoard(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover",colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend",square);   
}
}

populateBoard(16);

function changeSize(input){
    if(input >= 2 && input <= 100){
    document.querySelector('.error').style.display = 'none';
    populateBoard(input);
    }else{
    document.querySelector(".error").style.display = 'flex';
        
    }
}

function colorSquare(){
    if(click){
    if(color ==='random'){
        this.style.backgroundColor =`hsl(${Math.random() * 360}, 100%, 50%)`
    }else{
    this.style.backgroundColor = color;
    }
}
}

function changeColor(choice){
    color=choice;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor ="white");
}
document.querySelector("body").addEventListener("click",(e)=>{
    if(e.target.tagName != 'BUTTON'){
    click = !click;
    if(click){
        document.querySelector(".mode").textContent = "Mode:Coloring"
    }else{
        document.querySelector(".mode").textContent ="Mode:Not Coloring"
    }
    }
})