/*EXERCISE: Write a sketch that draws a rectangle. If the mouse position is inside the rectangle, draw the rectangle with a blue fill. If the mouse position is outside the rectangle, draw the rectangle with a red fill.*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lemonchiffon");
  noStroke();
  rect(150, 150, 100, 100);
   /*let coordinates = mouseX + ":" + mouseY;
    text(coordinates, mouseX, mouseY);*/
  if(mouseX > 149 && mouseY > 149 && mouseX < 251 && mouseY < 251) {
     /*rect(150, 150, 100, 100);*/
    fill("blue")
     }
  else {
    fill("red")
  }
}