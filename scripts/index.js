(function(window, document, undefined){

  // code that should be taken care of right away
  
  window.onload = init;
  
    function init(){
      var grid = new Grid()
      var cards = new Card("assets/ExampleMonster.png","Teste de carta")

      grid.append(cards,0,0)
      console.log(grid)
      
    }
  
  })(window, document, undefined);


//AUX Functions

function loadAllCards(){
  var cards = []
  cards.push(new Card("assets/ExampleMonster.png","Teste de carta"))
  return cards 
}