function bgchange(m) {  //m is the # modal
  var lst = ["url(img/bgs/sky1.gif)","url(img/bgs/sky2.gif)","url(img/bgs/sky3.gif)","url(img/bgs/sky4.gif)","url(img/bgs/sky5.gif)","url(img/bgs/sky6.gif)","url(img/bgs/sky7.gif)", "url(img/bgs/sky8.gif)", "url(img/bgs/sky9.gif)", "url(img/bgs/sky10.gif)"]
  var rand = Math.floor((Math.random() * 10));
  document.getElementById('bg'+m).style.backgroundImage = lst[rand];
}
function openbox(m) {
  document.getElementById('modal'+m).style.display = "block";
}

function closebox(m) {
  document.getElementById('modal'+m).style.display = "none";
}

var ind = 1;
showSlides(ind,1);

function plusSlides(n,m) {
  showSlides(ind += n,m);
}

function current(n, m) {
  showSlides(ind = n, m);
}

function showSlides(n, m) {
  var i;
  var slides = document.getElementsByClassName("slides"+m);
  var dots = document.getElementsByClassName("demo");

  if (n > slides.length) {ind = 1}
  if (n < 1) {ind = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[ind-1].style.display = "block";
  dots[ind-1].className += " active";
}
