var liberty = document.getElementById('liberty');
var village = document.getElementById('village');
var taxi = document.getElementById('taxi');

liberty.addEventListener("mousedown",openLiberty);
village.addEventListener("mousedown",openVillage);
taxi.addEventListener("mousedown",openTaxi);

function openLiberty() {
  liberty.classList.add("pressed")
  setTimeout(function(){window.location.href = "liberty/index.html";},3000);
}

function openVillage() {
  village.classList.add("pressed")
  setTimeout(function(){window.location.href = "buildings/index.html";},3000);
}

function openTaxi() {
  taxi.classList.add("pressed")
  setTimeout(function(){window.location.href = "taxi/index.html";},3000);
}
