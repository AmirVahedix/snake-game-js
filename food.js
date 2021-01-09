import { onSnake, expandSnake } from './snake.js'
let food = { x: 10, y: 1 }
const EXPANSION_RATE = 1

export function update() {
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = { x: 20, y:10 }  
    }
}

export function draw(gameBoard) {
    const foodElemnt = document.createElement('div')
    foodElemnt.style.gridRowStart = food.y
    foodElemnt.style.gridColumnStart = food.x
    foodElemnt.classList.add('food')
    gameBoard.appendChild(foodElemnt)
}
