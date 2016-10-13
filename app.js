
// Self-invoking Anonymous function

 var clicked = (function(){
	 counter = 0; 
	 
	 // Closure
	 return function(){
		 counter += 1;
	 }
 })();
 
