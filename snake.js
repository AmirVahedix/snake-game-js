import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 2
const SNAKE_BODY = [
    { x: 11 , y: 11 },
    { x: 12 , y: 11 },
    { x: 13 , y: 11 },
    { x: 14 , y: 11 },
    { x: 15 , y: 11 },
    { x: 16 , y: 11 },
]

export function update() {
    for(let i = SNAKE_BODY.length - 2; i >= 0; i--){
        SNAKE_BODY[i + 1] = { ...SNAKE_BODY[i] }
    }
    SNAKE_BODY[0].x += 0
    SNAKE_BODY[0].y += 1
}

export function draw(gameBoard) {
    SNAKE_BODY.forEach(segmant => {
        const snakeElemnt = document.createElement('div')
        snakeElemnt.style.gridRowStart = segmant.y
        snakeElemnt.style.gridColumnStart = segmant.x
        snakeElemnt.classList.add('snake')
        gameBoard.appendChild(snakeElemnt)
    })
}