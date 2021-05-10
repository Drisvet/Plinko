function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  var canvas = createCanvas (480,800);  
  drawSprites();
}

function setup() {
  var particles = []
  var plinkis = [];
  var divisions = [];
}

var divisionHeight=300;

for (var k = 0; k<=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  divisions2.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  divisions3.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  divisions4.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  divisions5.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  divisions6.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  divisions7.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  divisions8.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = -20; j <=width-20; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for (var j = -50; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }
  
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }