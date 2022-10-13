class Snake{
    constructor(grid,maxCol,maxRow){
        this.grid = grid
        
        //Position in grid
        this.row = 0
        this.col = 0

        this.maxCol = Math.floor(maxCol)-2
        this.maxRow = Math.floor(maxRow)-2

        //Velocity
        this.deltaX = 0
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
        this.col += this.deltaY
        this.row += this.deltaX

        var colRange = (this.col > -1 && this.col <= this.maxCol) 
        var rowRange = (this.row > -1 && this.row <= this.maxRow)

        //console.log(this.col,colRange,this.maxCol)
        //console.log(this.row,rowRange,this.maxRow)

        return rowRange && colRange

    }

    draw(ctx){
        try {
            ctx.beginPath()
            ctx.arc(this.grid[this.row][this.col].centerX, this.grid[this.row][this.col].centerY, 9, 0, 2 * Math.PI, false)
            ctx.fillStyle = 'green';
            ctx.fill();
        }catch (error) {
            console.log("Erro",this.col)   
        }
    }

    foundApple(){
        if(grid[this.row][this.col].hasApple){
            console.log("Apple")
        }
    }

    
}
