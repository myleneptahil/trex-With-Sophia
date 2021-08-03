var cloud, cloudImage;
var trex, trex_running, edges;
var groundImage;
var invisibleGround;
var i;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score = 0;

var cloudsGroup, obstaclesGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;



function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    cloudImage = loadImage("cloud.png")
    groundImage = loadImage("ground2.png")
    obstacle1 = loadImage("obstacle1.png")
    obstacle2 = loadImage("obstacle2.png")
    obstacle3 = loadImage("obstacle3.png")
    obstacle4 = loadImage("obstacle4.png")
    obstacle5 = loadImage("obstacle5.png")
    obstacle6 = loadImage("obstacle6.png")
}

function setup() {
    createCanvas(600, 200);





    // creating trex
    trex = createSprite(50, 160, 20, 50);
    trex.addAnimation("running", trex_running);
    edges = createEdgeSprites();

    //adding scale and position to trex
    trex.scale = 0.5;
    trex.x = 50

    //make ground sprite
    ground = createSprite(50, 180, 20, 20);
    ground.addAnimation("ground", groundImage);
    //ground.x = ground.width/2;

    invisibleGround = createSprite(200, 200, 600, 10);

    //create obstacle and cloud group
    obstaclesGroup = new Group();
    cloudsGroup = new Group();

    trex.setCollider("circle", 0, 0, 40);
    trex.debug = true;

}


function draw() {
    //set background color 
    background("white");
    text("Score: " + score, 500, 50);



    if (gameState === PLAY) {

        //move the ground
        ground.velocityX = -2;

        //scoring update
        score = score + Math.round(frameCount / 60);

        //reset the ground
        if (ground.x < 0) {
            ground.x = ground.width / 2;
        }

        //jump when space key is pressed
        if (keyDown("space") && trex.y >= 171) {
            trex.velocityY = -10;

        }

        //add gravity to the trex
        trex.velocityY = trex.velocityY + 0.5;

        //stop trex form falling down
        trex.collide(invisibleGround);

        //make the invisible ground invisible
        invisibleGround.visible = false;

        //spawn the clouds and cactus
        spawnClouds();
        spawnObstacles();

        if (obstaclesGroup.isTouching(trex)) {
            gameState = END;
        }

        drawSprites();
    } else if (gameState === END) {

        //stop the ground
        ground.velocityX = 0;

        //make the clouds and obstacles stop moving
        obstaclesGroup.setVelocityXEach(0);
        cloudsGroup.setVelocityXEach(0);

    }



    //console.log(ran);

    //console.log(trex.y);

    //logging the y position of the trex
    //console.log(trex.y)

    //stop trex from falling down
    trex.collide(edges[3])
    console.log(frameCount);
}

function spawnClouds() {
    //write code to spawn clouds
    if (frameCount % 60 === 0) {
        cloud = createSprite(600, 100, 40, 10);
        cloud.velocityX = -3;
        cloud.addImage(cloudImage);
        cloud.scale = 0.4;
        cloud.y = Math.round(random(10, 60));

        //assign lifetime to variable
        cloud.lifetime = 200;

        //adding clouds to the group
        cloudsGroup.add(cloud);

    }
}

function spawnObstacles() {
    if (frameCount % 60 === 0) {
        var obstacle;
        obstacle = createSprite(600, 165, 10, 40);
        obstacle.velocityX = -3;
        obstacle.scale = 0.4;
        var rand = Math.round(random(1, 6));

        //assign lifetime to variable
        obstacle.lifetime = 200;

        switch (rand) {
            case 1:
                obstacle.addImage(obstacle1);
                break;
            case 2:
                obstacle.addImage(obstacle2);
                break;
            case 3:
                obstacle.addImage(obstacle3);
                break;
            case 4:
                obstacle.addImage(obstacle4);
                break;
            case 5:
                obstacle.addImage(obstacle5);
                break;
            case 6:
                obstacle.addImage(obstacle6);
                break;

            default:
                break;

        }

        //add each obstacle to the group
        obstaclesGroup.add(obstacle);

    }
}