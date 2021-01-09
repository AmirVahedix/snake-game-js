let lastRenderTime = 0
import {SNAKE_SPEED, update as updateSnake, draw as drawSnake} from './snake.js '
const gameBoard = document.querySelector('#game-board')

function main(currentTime){
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    updateSnake()
    drawSnake(gameBoard)
}

window.requestAnimationFrame(main)