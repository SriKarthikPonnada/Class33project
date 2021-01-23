const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particle;

var plinko = [] ;
var divisions = [];

var divisionHeight = 300 ;

var score = 0 ;
var count = 0 ;

var gameState;
gameState = "play";

function preload() {
    backgroundImg = loadImage("Game_over.jpg")
}

function setup(){
    createCanvas(1515, 725);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, 700, width, 25)


    for (var k = 40; k<=width; k = k+80){
		divisions.push(new Division(k, height-divisionHeight/2-30, 10, divisionHeight))
	}
    for (var j = 50; j <=width; j=j+50) 
    {
       plinko.push(new Plinko(j, 75));
    }
    for (var j = 25; j <=width; j=j+50) 
    {
       plinko.push(new Plinko(j, 150));
	}
    for (var j = 50; j <=width; j=j+50) 
    {
       plinko.push(new Plinko(j,225));
    }
     for (var j = 25; j <=width; j=j+50) 
    {
       plinko.push(new Plinko(j,300));
    }

    Engine.run(engine);
}

function draw(){

    background(255, 211, 117);

    Engine.update(engine);
   
    for (var k = 0; k < divisions.length; k++){
        divisions[k].display();
    }   
      
    for (var j = 0; j < plinko.length ; j++){
        plinko[j].display();
    }

    

    if(particle!=null)
    {
       particle.display();
        
       if (particle.body.position.y>550){

            if (particle.body.position.x < 117 &&
                particle.body.position.x > 55) {
                score=score+500;      
                particle=null;                       
            }
            else if (particle.body.position.x < 197 && 
                particle.body.position.x >  135) {
                score = score + 100;
                particle=null;
            }
            else if (particle.body.position.x < 277 && 
                particle.body.position.x >  215){
                score = score + 1000;
                particle=null;
            }
            else if (particle.body.position.x < 357 && 
                particle.body.position.x >  295) {
                score = score + 700;
                particle=null;
            }
            else if (particle.body.position.x < 437 && 
                particle.body.position.x > 375 ){
                score = score + 400;
                particle=null;
            }
            else if (particle.body.position.x < 517 && 
                particle.body.position.x > 455 ) {
                score = score + 900;
                particle=null;
            }
            else if (particle.body.position.x < 597 && 
                particle.body.position.x > 535 ){
                score = score + 300;
                particle=null;
            }
            else if (particle.body.position.x < 677 && 
                particle.body.position.x > 615 ) {
                score = score + 2000;
                particle=null;
            }
            else if (particle.body.position.x < 757 && 
                particle.body.position.x > 695 ){
                score = score + 1500;
                particle=null;
            }
            else if (particle.body.position.x < 837 && 
                particle.body.position.x >  775) {
                score = score + 50;
                particle=null;
            }
            else if (particle.body.position.x < 917 && 
                particle.body.position.x >  855){
                score = score + 2500;
                particle=null;
            }
            else if (particle.body.position.x < 997 && 
                particle.body.position.x >  935) {
                score = score + 200;
                particle=null;
            }
            else if (particle.body.position.x < 1077 && 
                particle.body.position.x > 1015 ){
                score = score + 600;
                particle=null;
            }
            else if (particle.body.position.x < 1167 && 
                particle.body.position.x > 1095 ) {
                score = score + 800;
                particle=null;
            }
            else if (particle.body.position.x < 1237 && 
                particle.body.position.x > 1175){
                score = score + 350;
                particle=null;
            }
            else if (particle.body.position.x < 1317 && 
                particle.body.position.x > 1255) {
                score = score + 1200;
                particle=null;
            }
            else if (particle.body.position.x < 1397 && 
                particle.body.position.x > 1335){
                score = score + 150;
                particle=null;
            }
            else if (particle.body.position.x < 1477 && 
                particle.body.position.x > 1415) {
                score = score + 3000;
                particle=null;
            }
        }
    }    
    
    strokeWeight(0)
    fill("magenta")
    textSize(35)
    textFont("joker")
    text("500", 55 ,480);
    text("100", 130, 480);
    text("1000", 203, 480);
    text("700", 292, 480);
    text("400", 373, 480);
    text("900", 452, 480);
    text("300", 535, 480);
    text("2000", 605 ,480);
    text("1500", 682, 480);
    text("50", 780, 480);
    text("2500", 845, 480);
    text("200", 930, 480);
    text("600", 1015, 480);
    text("800", 1095, 480);
    text("350", 1173, 480);
    text("1200", 1243, 480);
    text("150", 1328, 480);
    text("3000", 1405, 480);

    text("Score - "+ score, 1300,35);

    if (count >= 5){
        gameState = "end";
        imageMode(CORNER)
        image(backgroundImg,0,0,width,height);
        strokeWeight(0)
        fill("magenta")
        textSize(35)
        textFont("joker")
        text("Score : " + score , 650, 30)
        text("Press 'Ctrl + R' to restart ", 550,375);
    }

    if (gameState !== "end"){
        ground.display();
    }

}

function mousePressed(){
    if (gameState !== "end"){
        count++;
        particle = new Particle (mouseX, 0, 20, 20)
    }
}