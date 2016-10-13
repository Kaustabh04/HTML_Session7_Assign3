
// Self-invoking Anonymous function

 var counter = (function(){
	 count = 0; 
	 
	 // Closure
	 return function(){
		 count += 1;
	 }
 })();
 


