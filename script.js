const grid = document.querySelector(".grid")
const gridSize = 640 
let numSquares = 16
let squareWidth = gridSize / numSquares
const newline = document.createElement('br')
let colourMode = "grayscale"

generateGrid()
newGrid() // enables generating new grids
hovering() // turns on hovering on default
changeColourMode() //enables changing color modes
changeDrawingMode() // enables changing drawing mode


function generateGrid() {
    for(let i = 0; i < numSquares; i++) {
        for(let j = 0; j < numSquares; j++) {
            let square = document.createElement('div')
            square.classList.add('square')
            square.style.height = `${squareWidth}px`
            square.style.width = `${squareWidth}px`
            grid.appendChild(square)
        }
        grid.appendChild(newline)
    }
}

function clearGrid() {
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => grid.removeChild(square))
}

function newGrid() {    
    const newGridButton = document.querySelector(".newGridButton")
    newGridButton.addEventListener('click', () => {
        numSquares = prompt("How many squares per side would you like (from 2 to 64)?")
        console.log(numSquares)
        if(numSquares === null || numSquares === "" || isNaN(numSquares)) {
            alert("You should enter a number from 2 to 64")
            return
        }
        else if(numSquares < 2 || numSquares > 64) {
            alert("You entered a wrong number")
            return 
   
        }
        squareWidth = gridSize / numSquares
        clearGrid()
        generateGrid()
        hovering()
    })
}

function changeDrawingMode() {
    const buttons = document.querySelectorAll('button')
    buttons[2].onclick = () => {
        hovering()
        buttons[2].classList.add("buttonSelected")
        buttons[3].classList.remove("buttonSelected")
    }
    buttons[3].onclick = () => {
        clicking()
        buttons[2].classList.remove("buttonSelected")
        buttons[3].classList.add("buttonSelected")
    }
}

function hovering() {
    const squares = document.querySelectorAll('.square')
    squares.forEach(div => {
        div.removeEventListener('mousedown', draw)
        div.addEventListener('mouseover', draw)
    })
}

function clicking() {
    const squares = document.querySelectorAll('.square')
    squares.forEach(div => {
        div.removeEventListener('mouseover', draw)
        div.addEventListener('mousedown', draw)
    })
}

function changeColourMode() {
    const buttons = document.querySelectorAll('button')
    //enable choosing grayscale mode
    buttons[0].addEventListener('click', () => {
        colourMode = "grayscale"
        buttons[0].classList.add("buttonSelected")
        buttons[1].classList.remove("buttonSelected")
    })
    //enable choosing random colour mode
    buttons[1].addEventListener('click', () => {
        colourMode = "random"
        buttons[1].classList.add("buttonSelected")
        buttons[0].classList.remove("buttonSelected")
    })
}

function draw(div) {
    if(colourMode === "random") {
        div.target.style.opacity = 1
        div.target.style.backgroundColor = randomColour()
    } else if(colourMode === "grayscale") {
        if(div.target.style.backgroundColor === "rgb(0, 0, 0)") {
            div.target.style.opacity = parseFloat(div.target.style.opacity) + 0.1
        }
        else {
            div.target.style.backgroundColor = "#000000"
            div.target.style.opacity = 0.1
        }          
    }
}

function randomColour() {
    let randStr = "#";
    for(let i = 0; i < 3; i++) {
        let part = Math.floor(Math.random() * 256).toString(16)
        randStr += (part.length === 1 ? '0' + part : part)
    }
    return randStr
}

function increaseOpacity() {
    
}