function gen() {
  var lst = ["url(img/1.gif)","url(img/2.gif)"];
  var rand = Math.floor((Math.random() * 2));
  document.getElementById("bg").style.backgroundImage = lst[rand];
}
