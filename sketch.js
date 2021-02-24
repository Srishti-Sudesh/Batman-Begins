const World = Matter.World;
const Engine = Matter.Engine; 
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var man, manImage, drops, invisible;
var maxDrops = 100;
var raindrop = [];
var rand, thunder, thunderthing, thunder1, thunder2, thunder3, thunder4;

function preload(){
manImage = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png",)
thunder1 = loadImage("1.png");
thunder2 = loadImage("2.png");
thunder3 = loadImage("3.png");
thunder4 = loadImage("4.png");

}

function setup(){
    createCanvas(400, 370);
    engine = Engine.create();
	world = engine.world;

    man = createSprite(200,270,20,20);
    man.addAnimation("man walking", manImage);
    man.scale = 0.3;

    invisible = new Umbrella(210,235,60);
    if(frameCount%10===0){

        for(var i = 0; i<maxDrops; i++){
            raindrop.push(new Drops(random(0,400),random(0,370)));
        }
    }

}


function draw(){
    background("black");
    Engine.update(engine);

    drawSprites();



    for(var i = 0; i < maxDrops; i++){
        raindrop[i].display();
        raindrop[i].UpdateY();
    }

    rand = Math.round(random(1,4));
    if(frameCount%60===0){
        thunderthing = frameCount;
        thunder = createSprite(random(10,370),15,10,10);
        switch(rand){
            case 1 : thunder.addImage(thunder1);
            break;
            case 2 : thunder.addImage(thunder2);
            break;
            case 3 : thunder.addImage(thunder3);
            break;
            case 4 : thunder.addImage(thunder4);
            break;
        }

        thunder.scale = 0.3;

    }

    if(thunderthing + 10 === frameCount && thunder){
        thunder.destroy();
    }

}   

