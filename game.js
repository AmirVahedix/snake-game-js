let lastRenderTime = 0
import {SNAKE_SPEED, update as updateSnake, draw as drawSnake} from './snake.js '

function main(currentTime){
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    updateSnake()
    drawSnake()
}

window.requestAnimationFrame(main)