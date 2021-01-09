export const SNAKE_SPEED = 2
const SNAKE_BODY = [
    { x: 11 , y: 11 },
    { x: 12 , y: 11 },
    { x: 13 , y: 11 }
]

export function update() {
    console.log('update snake')
}

export function draw(gameBoard) {
    SNAKE_BODY.forEach(segmant => {
        const snakeElemnt = document.createElement('div')
        snakeElemnt.style.gridRowStart = segmant.x
        snakeElemnt.style.gridColumnStart = segmant.y
        snakeElemnt.classList.add('snake')
        gameBoard.appendChild(snakeElemnt)
    })
}