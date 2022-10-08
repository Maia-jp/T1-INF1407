document.body.addEventListener('keydown', keyDown);

const canvas = document.getElementById('game'); 
const ctx = canvas.getContext('2d');
const grid = createGrid()
const snake = new Snake(grid,CONFIG.canvasSizeW/18,CONFIG.canvasSizeH/18) 
console.log(grid)

gameLoop()






function gameLoop(){
  let speed=7;//The interval will be seven times a second.
  clearScreen();
  drawGrid()
  snake.updateMove()
  if (snake.collisionCheck()){
    console.log("kick")
    snake.col = 0
    snake.row = 0
  }
  snake.draw(ctx)
  setTimeout(gameLoop, 1000/speed);//update screen 7 times a second
}

function clearScreen(){
  ctx.fillStyle= 'black'// make screen black
  ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)// black color start from 0px left, right to canvas width and canvas height


}

function drawGrid(){
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      // if ([0,1].indexOf(i)>-1 && [0,1].indexOf(j)>-1){
        grid[i][j].draw(ctx)
      //}
    }
  }
}

function createGrid(){
  const xSize = Math.ceil( CONFIG.canvasSizeW/18)
  const ysize = Math.ceil( CONFIG.canvasSizeH/18)
  
  var grid = new Array(xSize)

  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(ysize);
    for (var j = 0; j < grid[i].length; j++) {
      grid[i][j] = new gridCell(i,j)
    }
  }

  return grid

}


function keyDown(event)
//up
{
    if(event.keyCode==38){
        yvelocity=-1; //move one tile up
        xvelocity=0;
        snake.velocity(xvelocity,yvelocity)
    }
    //down
    if(event.keyCode==40){
        yvelocity=1;//move one tile down
        xvelocity=0;
        snake.velocity(xvelocity,yvelocity)
    }
//left
    if(event.keyCode==37){
        yvelocity=0;
        xvelocity=-1;//move one tile left
        snake.velocity(xvelocity,yvelocity)
    }
    //right
    if(event.keyCode==39){
        yvelocity=0;
        xvelocity=1;//move one tile right
        snake.velocity(xvelocity,yvelocity)
    }
}