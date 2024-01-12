x = 0;
y = 0;
screenWidth = 0;
screenHeight = 0;
drawApple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
         recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

to_number = Number(content);
if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
  drawApple = "A maçã começou a ser desenhada";
  document.getElementById("status").innerHTML = toNumber + " não foi reconhecido";
}
}
function setup() {
 screen_width = 0;
 screen_height = 0;
 createCanvas(screenWidth ,screenHeight ,150);
 canvas.position(50,150);
}
function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    to_number = 1(content);
  }
  for(var i =1; i <= to_number; i++)
  {
   x = Math.floor(Math.random() * 700);
y  = Math.floor(Math.random() * 400);
image(apple, x, y, 50, 50);
  }
}
function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

speakData = "toNumber";//:) felicidades! .... meu aniversario falta 2 meses!!:) 
}
function preload(){
apple = loadImage("apple.png");

}