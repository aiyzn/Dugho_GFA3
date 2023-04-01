function results(){
	var num1 = Math.ceil(Math.random()*20);
	var num2 = Math.ceil(Math.random()*20);
	var num3 = Math.ceil(Math.random()*20);
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	document.getElementById("num1").innerHTML = num1;
	document.getElementById("num2").innerHTML = num2;
	document.getElementById("num3").innerHTML = num3;

	if(Math.max(num1,num2,num3)==num1&&num1!=num2&&num1!=num3){
		document.getElementById("method").innerHTML="homicide ("+num1+")";
	}
	else if(Math.max(num1,num2,num3)==num2&&num2!=num1&&num2!=num3){
		document.getElementById("method").innerHTML="arson ("+num2+")";
	}
	else if(Math.max(num1,num2,num3)==num3&&num3!=num1&&num3!=num2){
		document.getElementById("method").innerHTML="poison ("+num3+")";
	}

	if (num1!=0){
		var name = alphabet[num1];
		document.getElementById("letter").innerHTML = name;
	}

	var mins = num2*num3;
	var hrs = parseInt((num2*num3)/60);
	var averageTime = (mins)%60;
	document.getElementById("time").innerHTML= hrs +"hr "+ averageTime +"min";

}


	
	
	