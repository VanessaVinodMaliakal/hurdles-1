class Player{
    constructor(){
this.count= null
this.name = null
this.distance = 0
    }
    getCount(){
    database.ref("playerCount").on("value",(data)=>{
        this.count = data.val()
    })
}
 updateCount(){
     database.ref("/").update({
 "playerCount": this.count
     })
 }
updatePlayerNameAndDistance(){
    var playerIndex = "players/player"+this.count
    database.ref(playerIndex).set({
        "name":this.name,
        "distance":this.distance
    })
}
}
