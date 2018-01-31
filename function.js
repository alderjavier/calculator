var operatora;
var operatorb;
var operation;

function init(){
 //variables
 var result = document.getElementById("result");
 var reset = document.getElementById("reset");
 var plus = document.getElementById("plus");
 var subtraction = document.getElementById("subtraction");
 var multiplication = document.getElementById("multiplication");
 var division = document.getElementById("division");
 var equals = document.getElementById("equals");
 var one = document.getElementById("one");  
 var two = document.getElementById("two");
 var three = document.getElementById("three");    
 var four = document.getElementById("four");
 var five = document.getElementById("five");
 var six = document.getElementById("six");
 var seven = document.getElementById("seven");
 var eight = document.getElementById("eight");
 var nine = document.getElementById("nine");
 var zero = document.getElementById("zero");
}
    //events
 one.onclick = function(e){
     result.textContent = result.textContent+"1";
 }
 two.onclick = function(e){
     result.textContent = result.textContent+"2";
 }
 three.onclick = function(e){
     result.textContent = result.textContent+"3";
 }
 four.onclick = function(e){
     result.textContent = result.textContent+"4";
 }
 five.onclick = function(e){
     result.textContent = result.textContent+"5";
 }
 six.onclick = function(e){
     result.textContent = result.textContent+"6";
 }
 seven.onclick = function(e){
     result.textContent = result.textContent+"7";
 }
 eight.onclick = function(e){
     result.textContent = result.textContent+"8";
 }
 nine.onclick = function(e){
     result.textContent = result.textContent+"9";
 }
 zero.onclick = function(e){
     result.textContent = result.textContent+"0";
 }
 
reset.onclick = function(e){
     reset();
 }
plus.onclick = function(e){
     operatora = result.textContent;
     operation = "+";
     clean();
 }
subtraction.onclick = function(e){
     operatora = result.textContent;
     operation = "-";
     clean();
 }
multiplication.onclick = function(e){
     operatora = result.textContent;
     operation = "*";
     clean();
 }
division.onclick = function(e){
     operatora = result.textContent;
     operation = "/";
     clean();
 }
 plus.onclick = function(e){
     operatorb = result.textContent;
     resolve();
 }


function clean(){
    result.textContent = "";
}

function reset(){
    result.textContent ="";
    operatora = 0;
    operatorb = 0;
    operation = "";
}

function resolve(){
    var res = 0;
 switch(operation){ 
         
    case "+";
        res = parseFloat(operatora) + parseFloat(operatorb);
        break;
         
    case "-";
        res = parseFloat(operatora) - parseFloat(operatorb);
        break;
    
    case "*";
        res = parseFloat(operatora) * parseFloat(operatorb);
        break;
    
    case "/";
        res = parseFloat(operatora) / parseFloat(operatorb);
        break;    
 }
  reset();
    result.textContent = res;     
}