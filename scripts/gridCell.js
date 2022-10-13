class gridCell{
    constructor(row,col){
        this.row = row
        this.col = col
        this.radius = 9
        this.centerX =  CONFIG.gridSizeRow*row +10
        this.centerY =  CONFIG.gridSizeCol*col +10

        this.hasApple = false
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false)
        //console.log(this.centerX,this.centerY)
        ctx.lineWidth = 2
        ctx.strokeStyle = '#003300';
        ctx.stroke()

        if(this.hasApple){
            ctx.fillStyle = 'red';
            ctx.fill();
        }
    }

    createRandomApple(){
        this.appleCol = Math.floor(getRandomArbitrary(0,10))
        this.appleRow = Math.floor(getRandomArbitrary(0,10))

    }
}