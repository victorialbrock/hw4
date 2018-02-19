var freqA = 100;
var freqS = 120;
var freqD = 130;
var freqF = 140;
var freqG = 150;
var freqH = 160;
var freqJ = 170;
var freqK = 180;

var oscA, oscS, oscD, oscF, oscG, oscH, oscJ; oscK;

var playing = false;
var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;
var playingG = false;
var playingH = false;
var playingJ = false;
var playingK = false;

function setup() {
background (200,200);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();

oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();

oscH = new p5.Oscillator();
  oscH.setType('triangle');
  oscH.freq(freqH);
  oscH.amp(0);
  oscH.start();

oscJ = new p5.Oscillator();
  oscJ.setType('triangle');
  oscJ.freq(freqJ);
  oscJ.amp(0);
  oscJ.start();
  
  oscK = new p5.Oscillator();
  oscK.setType('triangle');
  oscK.freq(freqJ);
  oscK.amp(0);
  oscK.start();
}

function draw() {
background(0);
  fill(0);
  if (playingA) {
noStroke();
fill(random(255),random(0),random(0));
    ellipse (random(width), random(height), random(20, 40));
} else if (playingS) {
noStroke();
fill(random(255),random(150),random(0));
    ellipse (random(width), random(height), random(20, 40));
} else if (playingD) {
noStroke();
fill(random(150),random(255),random(50));
    ellipse (random(width), random(height), random(20, 40));
} else if (playingF) {
noStroke();
fill(random(255),random(255),random(0));
    ellipse (random(width), random(height), random(20, 40));
} else if (playingG) {
noStroke();
fill(random(0),random(100),random(150));
    ellipse (random(width), random(height), random(20, 40));
} else if (playingH) {
noStroke();
fill(random(0),random(50),random(255));
    ellipse (random(width), random(height), random(20, 40));
} else if (playingJ) {
noStroke();
fill(random(200),random(0),random(255));
    ellipse (random(width), random(height), random(20, 40));
  } else {
    background(0, 0, 0);
  } text('Click Here \n Keys A S D \n F G H J', width / 2, 40);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
playingA = true;
  } else if (key == 'S') {
    osc = oscS;
playingS = true;
  } else if (key == 'D') {
    osc = oscD;
playingD = true;
  } else if (key == 'F') {
    osc = oscF;
playingF = true;
  } else if (key == 'G') {
    osc = oscG;
playingG = true;
  } else if (key == 'H') {
    osc = oscH;
playingH = true;
  }else if (key == 'J') {
    osc = oscJ;
playingJ = true;
    }else if (key == 'J') {
    osc = oscK;
playingK = true;
  }
  

  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
}else if (key == 'G') {
    osc = oscG;
  } else if (key == 'H') {
    osc = oscH;
  }else if (key == 'J') {
    osc = oscJ;
   }else if (key == 'K') {
    osc = oscK;
  }
  if (osc) {
    osc.amp(0, 2.5);
    playing = false;
playingA = false;
playingS = false;
playingD = false;
playingF = false;
playingG = false;
playingH = false;
playingJ = false;
playingK = false;
  }
}
