setTimeout(function(){
  var a = document.getElementsByClassName("building");
  var delta, buildingWindow, randNum;
  document.getElementById("background").style.backgroundColor = "rgb("+rCounter+","+gCounter+","+bCounter+")";
  var rCounter = 80; //70b2ff
  var gCounter = 131; //70b2ff
  var bCounter = 191; //70b2ff
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
  document.getElementById("background").style.backgroundColor = "rgb("+rCounter+","+gCounter+","+bCounter+")";
}, 100);

function lightOn(buildingWindow) {
  if (buildingWindow.style.fill == "") {
    buildingWindow.style.fill = "fdffce";
    rCounter -= 3;
    gCounter -= 3;
    bCounter -= 3;
    document.getElementById("background").style.backgroundColor = "rgb("+rCounter+","+gCounter+","+bCounter+")";
  }
  else if (buildingWindow.style.fill == "rgb(253, 255, 206)") {
    buildingWindow.style.fill = "";
    rCounter += 3;
    gCounter += 3;
    bCounter += 3;
    document.getElementById("background").style.backgroundColor = "rgb("+rCounter+","+gCounter+","+bCounter+")";
  }
}
