class Snake{
    constructor(grid,maxCol,maxRow){
        this.grid = grid
        
        //Position in grid
        this.row = 0
        this.col = 0

        this.maxCol = maxCol
        this.maxRow = maxRow

        //Velocity
        this.deltaX = 1
        this.deltaY = 0

        //Position to be drawed
        this.drawedPosX = 0
        this.drawedPosY = 0
    }

    //Add velocity to the snake
    velocity(x,y){
        this.deltaX = x
        this.deltaY = y
    }

    updateMove(){
        this.col += this.deltaX
        this.row += this.deltaY
    }

    collisionCheck(){
        if (between(this.x,0,this.maxCol) || between(this.y,0,this.maxRow)){
            return false
        }else{
            return true
        }
    }

    //TODO: Check if collison happens
    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.grid[this.row][this.col].centerX, this.grid[this.row][this.col].centerY, 9, 0, 2 * Math.PI, false)
        ctx.fillStyle = 'green';
        ctx.fill();
    }
    //Draw it

    //Incirese size

}

//AUX
function between(x, min, max) {
    return x >= min && x <= max;
  }
