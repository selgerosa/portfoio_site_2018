function bgchange(e) {
  var n=Math.floor(10*Math.random());
  document.getElementById("bg"+e).style.backgroundImage=["url(img/bgs/sky1.gif)","url(img/bgs/sky2.gif)","url(img/bgs/sky3.gif)","url(img/bgs/sky4.gif)","url(img/bgs/sky5.gif)","url(img/bgs/sky6.gif)","url(img/bgs/sky7.gif)","url(img/bgs/sky8.gif)","url(img/bgs/sky9.gif)","url(img/bgs/sky10.gif)"][n]
}
function openbox(e){
  document.getElementById("modal"+e).style.display="flex"
}
function closebox(e){
  document.getElementById("modal"+e).style.display="none"
}
var ind=1,navind=1;
function plusSlides(e,n){
  showSlides(ind+=e,n)
}
function current(e,n){
  showSlides(ind=e,n)
}
function showSlides(e,n){
  var t,s=document.getElementsByClassName("slides"+n),a=document.getElementsByClassName("demo");
  for(e>s.length&&(ind=1),e<1&&(ind=s.length),t=0;t<s.length;t++)s[t].style.display="none";
  for(t=0;t<a.length;t++)a[t].className=a[t].className.replace(" active","");s[ind-1].style.display="flex",a[ind-1].className+=" active"
}
function changeNav(e,n){
  var t;navind=e+navind;
  var s=document.getElementsByClassName(n);
  for(navind>s.length&&(navind=1),navind<1&&(navind=s.length),t=0;t<s.length;t++)s[t].style.display="none";s[navind-1].style.display="flex"
}
function showSites(){
  var e,n=Math.floor(3*Math.random())+1,t=document.getElementsByClassName("sites"),s=Math.floor(Math.random()*t.length),a=[["55vh","63vw"],["150vh","5vw"],["80vh","20vw"]];
  for(e=0;e<n;e++)t[s].style.display="block",t[s].style.top=a[e][0],t[s].style.left=a[e][1],s=Math.floor(Math.random()*t.length),posrand=Math.floor(Math.random()*a.length)
}
function randfriend(){
  var e=["https://derichamer.me/","http://gelard.com","http://www.herger.me/","http://q-mart.net/","https://www.danielledinstman.com/","https://www.gracecolbertdesign.com/","https://www.tabithamichaelidis.com/"],n=Math.floor(Math.random()*e.length);window.location.href=e[n]}
