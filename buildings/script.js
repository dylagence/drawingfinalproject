var rCounter = 112; //70b2ff
var gCounter = 178; //70b2ff
var bCounter = 255; //70b2ff

setTimeout(function(){
  var a = document.getElementsByClassName("building");
  var delta, buildingWindow, randNum;
  var svgDoc = a[0].contentDocument;
  delta = svgDoc.getElementsByClassName("window");
  for (var i=0;i<delta.length;i++) {
      (function () {
        var buildingWindow = delta[i];
        randNum = Math.floor(Math.random()*Math.floor(5));
        if (randNum == 4) {
          buildingWindow.style.fill = "fdffce";
          rCounter -= 3;
          gCounter -= 3;
          bCounter -= 3;
        }
        delta[i].addEventListener("mousedown",function() {lightOn(buildingWindow);}, false);
      }());
  };
  svgDoc = a[2].contentDocument;
  delta = svgDoc.getElementsByClassName("window");
  for (var i=0;i<delta.length;i++) {
      (function () {
        var buildingWindow = delta[i];
        randNum = Math.floor(Math.random()*Math.floor(6));
        if (randNum == 4) {
          buildingWindow.style.fill = "fdffce";
          rCounter -= 3;
          gCounter -= 3;
          bCounter -= 3;
        }
        delta[i].addEventListener("mousedown",function() {lightOn(buildingWindow);}, false);
      }());
  };
  svgDoc = a[3].contentDocument;
  delta = svgDoc.getElementsByClassName("window");
  for (var i=0;i<delta.length;i++) {
      (function () {
        var buildingWindow = delta[i];
        randNum = Math.floor(Math.random()*Math.floor(5));
        if (randNum == 4) {
          buildingWindow.style.fill = "fdffce";
          rCounter -= 3;
          gCounter -= 3;
          bCounter -= 3;
        }
        delta[i].addEventListener("mousedown",function() {lightOn(buildingWindow);}, false);
      }());
  };
  svgDoc = a[4].contentDocument;
  delta = svgDoc.getElementsByClassName("window");
  for (var i=0;i<delta.length;i++) {
      (function () {
        var buildingWindow = delta[i];
        randNum = Math.floor(Math.random()*Math.floor(4));
        if (randNum == 3) {
          buildingWindow.style.fill = "fdffce";
          rCounter -= 3;
          gCounter -= 3;
          bCounter -= 3;
        }
        delta[i].addEventListener("mousedown",function() {lightOn(buildingWindow);}, false);
      }());
  };
  svgDoc = a[5].contentDocument;
  delta = svgDoc.getElementsByClassName("window");
  for (var i=0;i<delta.length;i++) {
      (function () {
        var buildingWindow = delta[i];
        randNum = Math.floor(Math.random()*Math.floor(6));
        if (randNum == 4) {
          buildingWindow.style.fill = "fdffce";
          rCounter -= 3;
          gCounter -= 3;
          bCounter -= 3;
        }
        delta[i].addEventListener("mousedown",function() {lightOn(buildingWindow);}, false);
      }());
  };
  svgDoc = a[1].contentDocument;
  delta = svgDoc.getElementsByClassName("window");
  for (var i=0;i<delta.length;i++) {
      (function () {
        var buildingWindow = delta[i];
        randNum = Math.floor(Math.random()*Math.floor(5));
        if (randNum == 4) {
          buildingWindow.style.fill = "fdffce";
          rCounter -= 3;
          gCounter -= 3;
          bCounter -= 3;
        }
        delta[i].addEventListener("mousedown",function() {lightOn(buildingWindow);}, false);
      }());
  };
  colorChange(rCounter,gCounter,bCounter);

}, 100);

var r = 112;
var g = 178;
var b = 255;

function colorChange (rCounter,gCounter,bCounter) {
  setTimeout(function() {
    console.log(rCounter,gCounter,bCounter);
    console.log(r,g,b);
    if (r > rCounter) {
      r -= 1;
    }
    else if (r != rCounter) {
      r += 1;
    }
    if (g > gCounter) {
      g -= 1;
    }
    else if (g != gCounter) {
      g += 1;
    }
    if (b > bCounter) {
      b -= 1;
    }
    else if (b != bCounter) {
      b += 1;
    }

    if (b != bCounter) {
      document.getElementById("background").style.backgroundColor = "rgb("+r+","+g+","+b+")";
      colorChange(rCounter,gCounter,bCounter);
    }
  }, 50)
}

function lightOn(buildingWindow) {
  if (buildingWindow.style.fill == "") {
    buildingWindow.style.fill = "fdffce";
    rCounter -= 3;
    gCounter -= 3;
    bCounter -= 3;
    colorChange(rCounter,gCounter,bCounter);
  }
  else if (buildingWindow.style.fill == "rgb(253, 255, 206)") {
    buildingWindow.style.fill = "";
    rCounter += 3;
    gCounter += 3;
    bCounter += 3;
    colorChange(rCounter,gCounter,bCounter);
  }
}
