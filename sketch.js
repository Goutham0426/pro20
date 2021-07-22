var bg,sleep,brush,gym,eat,bath,move;
var astronaut;
var background;


function preload(){
bg = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym1.png","gym1.png","gym2.png","gym2.png");
eat = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
move = loadAnimation("move.png","move.png","move1.png","move1.png");
}


function setup() {
  createCanvas(800,400);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale =0.1;

 
}

function draw() {
 

  background = createSprite(200,200);
  background.addImage(bg);

 
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation(brush)
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
    
    if(keyDown("DOWN_ARROW")){
      astronaut.addAnimation("Gymming",gym);
      astronaut.changeAnimation(gym)
      astronaut.y = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
      }
    
      if(keyDown("LEFT_ARROW")){
        astronaut.addAnimation("Eating",eat);
        astronaut.changeAnimation(eat)
        astronaut.y = 350;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
        }
        if(keyDown("RIGHT_ARROW")){
          astronaut.addAnimation("Bathing",bath);
          astronaut.changeAnimation(bath)
          astronaut.y = 350;
          astronaut.velocityX = 0;
          astronaut.velocityY = 0;
          }
          if(keyDown("M_KEY")){
            astronaut.addAnimation("Moving",move);
            astronaut.changeAnimation(move)
            astronaut.y = 350;
            astronaut.velocityX = 1;
            astronaut.velocityY = 0;
            }



  createEdgeSprites(); 
  
  
  

  drawSprites();
}