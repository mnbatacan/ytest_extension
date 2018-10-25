// $('a').click(function() {
// 	alert("hey!");	
// });

// var btn = document.createElement("btn"); 
// btn.innerHTML = '<button class="moderate" type="button">Moderate</button>';
// $("body").append(btn);
  // var greeting = "hola, ";
  // var button = document.getElementById("mybutton");
  // button.person_name = "Roberto";
  // button.addEventListener("click", function() {
  //   alert(greeting + button.person_name + ".");
  // }, false);

// var btn1 = document.createElement('btn');
// btn1.id = 'popup';
// document.body.appendChild(btn1);
// document.getElementById('popup').innerHTML="My extension name"​;

// document.getElementById.apply(document, arguments);
// }

var div = document.createElement( 'div' );
var btn = document.createElement( 'input' );
document.body.appendChild( div );
div.appendChild( btn );
div.appendChild( title);
div.id = 'myDivId';
div.style.position = 'fixed';
div.style.alignContent='center';
div.style.top = '90%';
div.style.left = '75%';
// div.style.right = '70%';
div.style.width = '90%';   
div.style.height = '100%';
div.style.backgroundColor = 'red';



btn.type = 'button';
btn.id = 'puta';
btn.value = 'Moderate!';
// btn.style.position = 'absolute';
btn.style.visibility = 'visible';
btn.style.zIndex='1000';
btn.style.height = '5%';
btn.style.width = '26%';

btn.style.marginLeft = "10px";
btn.style.marginTop = "14px";
// btn.style.top = '50%';
// btn.style.left = '50%';
btn.style.backgroundColor = 'yellow';