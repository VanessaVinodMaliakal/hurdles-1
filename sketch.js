var database,formObj,playerCount,playerObj;
playercount = 0

function setup(){
    createCanvas(displayWidth-40, displayHeight-40)
    database = firebase.database()
formObj = new Form()
}

function draw(){

formObj.display()


}