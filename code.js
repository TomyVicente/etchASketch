//Plan
// Create a 16 x 16 grid of divs with JS
//  make a for loop creating 16x16 times new divs with the class grid and adding it inside a div .container on the html 
// Make it look like a grid with flexbox
// Set a hoover effect so when the mouse pass arround the divs will change the color
//Add a button to the top of the page that will send a popup asking for how many squares the user wants while is less than 100


let gridQuantity = 16;
let classContainer = document.getElementsByClassName("container");
let gridContainer = classContainer [0];

//For cycle to create a N x N grid
for(let i =0 ;i<gridQuantity;i++){
    for (let a = 0; a < gridQuantity; a++) {
        let div = document.createElement('div');
        div.className = "grid";
        gridContainer.appendChild(div);
    }

}

