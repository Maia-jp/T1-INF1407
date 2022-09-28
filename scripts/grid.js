//O Tabuleiro
class Grid{
    constructor(){
        this.grid = new Array(6)

        for (var i = 0; i < this.grid.length; i++) {
            this.grid[i] = new Array(4);
        }
    
        this.grid[0][0] = new GridPlace("g0") 
        this.grid[1][0] = new GridPlace("g1") 
        this.grid[2][0] = new GridPlace("g2") 
        this.grid[3][0] = new GridPlace("g3")
        this.grid[4][0] = new GridPlace("g4") 
        this.grid[5][0] = new GridPlace("g5")

        this.grid[0][1] = new GridPlace("g6")

        this.grid[1][1] = new GridPlace("g7") 
        this.grid[2][1] = new GridPlace("g8") 
        this.grid[3][1] = new GridPlace("g9") 
        this.grid[4][1] = new GridPlace("g10") 
        this.grid[5][1] = new GridPlace("g15")

        this.grid[0][2] = this.grid[0][1]
        this.grid[1][2] = new GridPlace("g11") 
        this.grid[2][2] = new GridPlace("g12") 
        this.grid[3][2] = new GridPlace("g13") 
        this.grid[4][2] = new GridPlace("g14") 
        this.grid[5][2] = this.grid[5][1]

        this.grid[0][3] = new GridPlace("g16") 
        this.grid[1][3] = new GridPlace("g17") 
        this.grid[2][3] = new GridPlace("g18") 
        this.grid[3][3] = new GridPlace("g19") 
        this.grid[4][3] = new GridPlace("g20") 
        this.grid[5][3] = new GridPlace("g21") 
        
    }

    append(card,x,y){
        this.grid[x][y].card = card 
    }
}

//Um Espaco do tabuleiro
class GridPlace{
    
    constructor(id){
        this.id = id
        this.card = null
        this.el = document.getElementById(id)
        this.el.addEventListener('click', this.clickHandler.bind(this));
    }

    // TODO: Pegar e devolver carta baseado no tipo do tabuleiro

    placeCardUppon(){
        var el = document.getElementById(this.id)
        var img = document.createElement("IMG");
        if(this.card){
            //img.src = this.cardStack[-1].file
            console.log(this.card.file)
            //el.appendChild(img)
        }else{
            console.log("ta nulo")
        }
    }

    clickHandler() {
        this.placeCardUppon()
    }
}

//Tipos de espaco no tabuleiro
class GridPlacesTypes {
    static hand = new GridPlacesTypes('Hand');
    static block = new GridPlacesTypes('Block');
    static deck = new GridPlacesTypes('Deck');
    static field = new GridPlacesTypes('Field');
  
    constructor(name) {
      this.name = name;
    }
    toString() {
      return `Color.${this.name}`;
    }
  }