let numSquares = 6; 
let colors = []; 
let pickedColor;  
let squares = document.querySelectorAll('.square'); 
let colorDisplay = document.getElementById('colorDisplay'); 
let messageDisplay = document.getElementById('message'); 
let h1 = document.querySelector('h1'); 
let resetButton = document.querySelector('#reset'); 
let modeButtons = document.querySelectorAll('.mode'); 

init(); 

function init() {
    setupModeButtons();
    setupSquares(); 
    reset(); 
}

function setupModeButtons() {
        // mode button event listeners
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected'); 
            modeButtons[1].classList.remove('selected'); 
            this.classList.add('selected'); 
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
            // same as if statement
            reset(); 
            // figure out how many sqaures to show
            // pick new colors
            // pick a new picked color
            // update page to reflect changes
        }); 
    }
}

function setupSquares() {
        for(let i = 0; i <squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener('click', function(){
            //grab color of picked square
            let clickedColor = this.style.backgroundColor; 
            //compare color to picked color
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "CORRECT"; 
                resetButton.textContent = "PLAY AGAIN?"; 
                changeColors(clickedColor); 
                h1.style.backgroundColor = clickedColor; 
            } else {
                this.style.backgroundColor = '#232323'; 
                messageDisplay.textContent = "TRY AGAIN"; 
            }
        }); 
    }
}



function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares); 
    //pick new random color
    pickedColor = pickColor(); 
    //change color display to match picked color
    colorDisplay.textContent = pickedColor; 
    resetButton.textContent = "New Colors"; 
    messageDisplay.textContent = ""; 
    //change colors of squares on page
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"; 
        }
         
    }
    h1.style.backgroundColor = 'steelblue';     
}


// easyBtn.addEventListener('click', function(){
//     hardBtn.classList.remove('selected'); 
//     easyBtn.classList.add('selected'); 
//     numSquares = 3; 
//     colors = generateRandomColors(numSquares); 
//     pickedColor = pickColor(); 
//     colorDisplay.textContent = pickedColor; 
//     for(let i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i]; 
//         } else {
//             squares[i].style.display = "none"; 
//         }
//     }
// }); 

// hardBtn.addEventListener('click', function(){
//     hardBtn.classList.add('selected');  
//     easyBtn.classList.remove('selected');
//     numSquares = 6; 
//     colors = generateRandomColors(numSquares); 
//     pickedColor = pickColor(); 
//     colorDisplay.textContent = pickedColor; 
//     for(let i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i]; 
//             squares[i].style.display = "block"; 
//     }
// }); 


resetButton.addEventListener('click', function (){
    reset(); 
}); 

function changeColors(color) {
 //loop through squares
 for(let i = 0; i < squares.length; i++) {
      //change each color to match given color
     squares[i].style.backgroundColor = color; 
 }

}

function pickColor(){
   let random = Math.floor(Math.random() * colors.length); 
   return colors[random]; 
}

function generateRandomColors(num) {
    //make array
    let arr = []; 
    //add num random colors to array
    for(let i = 0; i < num; i++) {
        //get random color push into array
        arr.push(randomColor())
    }
    //return array
    return arr; 
}

function randomColor() {
    //pick a "red" from 0 to 255
    let r = Math.floor(Math.random() * 256); 
    //pick a "green" from 0 to 255
    let g = Math.floor(Math.random() * 256); 
    //pick a "blue" from 0 to 255
    let b = Math.floor(Math.random() * 256); 
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}