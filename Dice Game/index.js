var randno=Math.floor(Math.random()*6)+1;
var randdiceimg="dice"+randno+".png";
var imgsrc1="images/" + randdiceimg;

var image1=document.querySelector(".img1");
image1.setAttribute("src",imgsrc1);


var randno2=Math.floor(Math.random()*6)+1;
var randdiceimg2="dice"+randno2+".png";
var imgsrc2="images/" + randdiceimg2;

var image2=document.querySelector(".img2");
image2.setAttribute("src",imgsrc2);


if(randno>randno2)
{
  document.querySelector("h1").innerHTML="Player 1 wins!";
}

else if(randno<randno2)
{
  document.querySelector("h1").innerHTML="Player 2 wins!";
}

else {
  document.querySelector("h1").innerHTML="Draw";
}
