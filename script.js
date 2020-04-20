const grid = document.querySelector(".grid")
const gridSize = 640 
let numSquares = 16
let squareWidth = gridSize / numSquares
const newline = document.createElement('br')
let colourMode = "grayscale"

generateGrid()
hoverEffect()
changeColourMode()

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

function hoverEffect() {
    const squares = document.querySelectorAll('.square')
    squares.forEach(div => div.addEventListener('mouseover', changeColour))
}

function changeColourMode() {
    const buttons = document.querySelectorAll('button')
    //enable choosing grayscale mode
    buttons[0].addEventListener('click', () => {
        colourMode = "grayscale"
    })
    //enable choosing random colour mode
    buttons[1].addEventListener('click', () => {
        colourMode = "random"
    })
}

function changeColour(div) {
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