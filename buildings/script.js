var window = document.getElementsByClassName("window");

for (var i=0; i < window.length; i++) {
  window[i].onclick = turnOnWindow(){
    window.classList.add("windowClicked");
  }
}
