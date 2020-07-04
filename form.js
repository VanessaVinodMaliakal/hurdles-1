class Form{
    constructor(){
this.input = createInput("name")
this.button = createButton("proceed")
this.greetings = createElement("h3")
    }
    display(){
        this.input.position(600,300)
        this.button.position(650,350) 
        clear()
        var title = createElement("h1")
        title.html("Hurdels Race")
        title.position(600,200)
 
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            var name = this.input.value()
            this.greetings.html(name+". Its a pleasure to have you as a contestant of our hurdles race")
            this.greetings.position(420,250)
           
            playerObj = new Player
            playerObj.name = name
            playerObj.count = playerCount
            playerObj.getCount()
            playercount = playercount+1
            playerObj.updateCount()
            playerObj.updatePlayerNameAndDistance()
        })
       
        
    }
}
