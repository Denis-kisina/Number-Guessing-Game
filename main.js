//Number Guessing Game
var i = Math.floor(Math.random() * 100) + 1; //Generates random numbers and stores it in i

var j=i%2; //gets the modulus and stores the result in j
if (j==0) //Conitioin checks to see if the result in module is zero or not
	alert (i +" Number is Even"); 
else 
	alert (i +" Number is odd");

for(var count=1;count<=10;count++)
{
		let num = prompt ("Please enter a number:"); //Captures user input
	if (num==i){
		alert("You WIN!");
		break;
	}
	if (num<i){
		alert("Number is lower, make another guess");
	}
	if (num>i){
				alert("Number is higher,make another guess");
			}
	if (count==10){	
			alert("You LOSE!");}
}

/*if (num==i)
	//break;
	alert("You WIN!");
	
else 
	{
		if (num<i)
			alert("Number is lower, make another guess");
		else if (num>i)
			alert("Number is higher,make another guess");
		else	
			alert("You LOSE!");
	}*/


//else	
//alert("You LOSE!");

//alert("You LOSE!");
	

	
/*	var count=1;
while (count<=10){
	let num = prompt ("Please enter a number:"); //Outputs prompt window
	
	if (num>i)
	alert("Number is higher,make another guess");
//else if (num<i)
//	alert("Number is lower, make another guess");
//else if (num==i)
//	alert("You WIN!");
else
	alert("You LOSE!");

}*/
	



