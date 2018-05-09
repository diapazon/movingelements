document.querySelector(".play").onclick = function() {first()};
var interval=0;
function forth(){
var setinterval4=setInterval(goTop,1);
		function goTop(){
			if (interval == 600) {
        clearInterval(setinterval4);
		}
			else{
				 interval++; 
      forthBlock.style.bottom = interval + 'px'; 
			}
		}
}
function third(){
var setinterval3=setInterval(goLeft,1);
		function goLeft(){
			if (interval == 1314) {
        clearInterval(setinterval3);
				forth();
		}
			else{
				 interval++; 
      thirdBlock.style.right = interval + 'px'; 
			}
		}
}
function second(){
var setinterval2=setInterval(goBottom,1);
		function goBottom(){
			if (interval == 600) {
        clearInterval(setinterval2);
				third();
		}
			else{
				 interval++; 
      secondBlock.style.top = interval + 'px'; 
			}
		}
}
function first() {
	
	var setinterval1 = setInterval(goRight,1);
	
	
  function goRight() {
    if (interval == 1314) {
      clearInterval(setinterval1);
		second();
    }
		else {
      interval++; 
      firstBlock.style.left = interval + 'px'; 
    }
  }
	
	
}


document.querySelector(".stop").onclick = function() {myfunc()};

function myfunc(){
	firstBlock.style.top=0;
	firstBlock.style.left=0;
	
	secondtBlock.style.top=0;
	secondtBlock.style.right=0;
	
	thirdBlock.style.bottom=0;
	thirdBlock.style.right=0;
	
	forthdBlock.style.left=0;
	forthdBlock.style.bottom=0;
	
	
}

