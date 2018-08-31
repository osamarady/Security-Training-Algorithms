// JavaScript Document
/*-------------------- NavBar Function -----------------------*/
function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//==============| Global Defination | =================\\
var noComma;
var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nums = new Array();
for (i=0;i<10;i++) {nums[i]=i;}
var encAlpha;
var encArr = new Array();
var encNum;
var colomn = new Array();
//========================================= 1st Section[Caesar Cipher] ===================================================
//========= This Function For Decryption =========\\
function Decryption() {
	var num = document.getElementById('num').value;
	var resultLength = noComma.length;
	//========= This Loop For check txt =========\\
	for (var txtCount = 0; txtCount < resultLength; txtCount++) {
		var uppertxt = noComma.substr(txtCount,1);
		if (uppertxt == "+") { //this codition For replace plus into space
			encAlpha = uppertxt.replace("+", " ");
			encArr[txtCount] = encAlpha;
		}
		//========= This Loop For Check Alphabet =========\\
		for (var alphatxt=0; alphatxt < alpha.length; alphatxt++) {
			var Alphabet = [alpha[alphatxt]];
			if (Alphabet == uppertxt) { //check if alphabet is equal to text 
				if (num >0) {
					var ik;
					ik = num % 26;
					var ikey = Number(alphatxt) - Number(ik);
					if (ikey <0) {
						ikeya = Math.abs(ikey);
						ikeya = 26 - ikeya;
						ikey = ikeya;
					}
				}else if(num <0){
					num = Math.abs(num);
					var ik;
					ik = num % 26;
					var ikey = Number(alphatxt) - Number(ik);
					if(ikey <0){
						ikeya = Math.abs(ikey);
						ikeya = 26 - ikeya;
						ikey = ikeya;
					}
				}
				var key = [alpha[ikey]];
				encAlpha = uppertxt.replace(Alphabet, key);
				encArr[txtCount] = encAlpha;
			}
		}
		//========= This Loop For Check Numbers =========\\
		for (var Numbers=0; Numbers < nums.length; Numbers++) {
			var numberIndex = [nums[Numbers]];
			if(numberIndex == uppertxt){ //check if number in loop is equal input number
				if(num > 0){
					var ikey2 = Number(Numbers)-Number(num);
					ikey2 %= 9;
					if(ikey2 <0){
						ikeya2 = Math.abs(ikey2);
						ikeya2 = 9 - ikeya2;
						ikey2 = ikeya2;
					}
				}else if(num <0){
					var ikey2 = Number(num)+Number(Numbers);
					ikey2 %= 9;
					ikeya = Math.abs(ikey2);
					ikey2 = ikeya;
				}
				var key2 = [nums[ikey2]];
				encNum = uppertxt.replace(numberIndex, key2);
				encArr[txtCount] = encNum;
			}
		}
	}
	var tString = encArr.toString(); // convert array to string
	var noComm = tString.replace(/,/g,""); //show array without comma
	var hide = document.getElementById("div2");
	if (hide.className === "hidden") { //on click the div2 hidden will be visible
  		hide.className = "visible-lg";
		hide.className += " visible-md";
		hide.className += " visible-sm";
		hide.className += " visible-xs";
  	}
	document.getElementById("div2").innerHTML = "<h4>Decrypted text :<h4>" + "<p><mark>" + noComm + "</mark></p>";
	document.getElementById("div2").innerHTML += "<button onclick='location.reload()' class='btn btn-primary btn-block'>Refresh</button>";
}
//========= This Function For Encryption =========\\
function encryption(){
	//--------------- Define Inputs --------------\\
	var txt = document.getElementById("txt").value;
	var num = document.getElementById("num").value;
	//--------------- prepare txt variable --------------\\
  	var length = txt.length;
  	var upperCase = txt.toUpperCase();
  	//========= This Loop For check txt =========\\
  	for(var txtCount = 0; txtCount<length; txtCount++){
		var uppertxt = upperCase.substr(txtCount,1);
		if(uppertxt == " "){ //this codition For replace plus into space
			encAlpha = uppertxt.replace(" ", "+");
      		encArr[txtCount] = encAlpha;
    	}else if(uppertxt !== " "){ //this codition For replace any text other or sympol int null
			encAlpha = uppertxt.replace(/[^0-9a-z]/, "");
			encArr[txtCount] = encAlpha;
    	}
		/*========= This Loop For Check Alphabet =========*/
    	for (var alphatxt=0; alphatxt < alpha.length; alphatxt++) {
			var Alphabet = [alpha[alphatxt]];
      		if(Alphabet == uppertxt){//check if alphabet is equal to text 
				if(num >0){
					var ikey = Number(alphatxt)+Number(num);
			  		ikey %= 26;
		  		}else if(num <0){
					num = Math.abs(num);
			  		var ik;
			  		ik = num % 26;
			  		var ikey = Number(alphatxt) + Number(ik);
			  		if(ikey <0){
						ikeya = Math.abs(ikey);
						ikeya = 26 - ikeya;
						ikey = ikeya;
					}
		  		}
				var key = [alpha[ikey]];
        		encAlpha = uppertxt.replace(Alphabet, key);
        		encArr[txtCount] = encAlpha;
      		}
		}
      	/*========= This Loop For Check Numbers =========*/
      	for (var Numbers=0; Numbers < nums.length; Numbers++) {
			var numberIndex = [nums[Numbers]];
        	if(numberIndex == uppertxt){ //check if number in loop is equal input number
				if(num >0){
					var ikey2 = Number(Numbers)+Number(num);
          			ikey2 %= 9;
				}else if(num <0){
					var ikey2 = Number(num)+Number(Numbers);
          			ikey2 %= 9;
			  		ikeya = Math.abs(ikey2);
			  		ikey2 = ikeya;
				}
          		var key2 = [nums[ikey2]];
          		encNum = uppertxt.replace(numberIndex, key2);
          		encArr[txtCount] = encNum;
        	}
    	}
  	}
  	var toStrng = encArr.toString(); // convert array to string
  	noComma = toStrng.replace(/,/g,""); //show array without comma
  	var hide = document.getElementById("div");
  	if (hide.className === "hidden") { //on click the div2 hidden will be visible
		hide.className = "visible-lg";
		hide.className += " visible-md";
		hide.className += " visible-sm";
		hide.className += " visible-xs";
    }
	document.getElementById("div").innerHTML = "<h4>Encrypted text :<h4>" + "<p id='p'><mark>" + noComma + "</mark></p>";
	document.getElementById("div").innerHTML += "<button onclick='Decryption()' class='btn btn-primary btn-block'>Decrypt</button>";
}
//========================================= 2nd Section[substitution Cipher] =============================================
var substitution = document.getElementById("num1");
substitution.onkeyup = function(){
	var b = document.getElementById("num1").value;
	if(isNaN(b) == false && b !== ""){
		if(b<alpha.length){
			var num = alpha[b];
			document.getElementById("sub1").innerHTML = num;
		}else if(b>=alpha.length){
			b %= 26;
			var num = alpha[b];
			document.getElementById("sub1").innerHTML = num;
		}
	}
};
var substitutions = document.getElementById("num2");
substitutions.onkeyup = function(){
	var b = document.getElementById("num2").value;
	if(isNaN(b) == false && b !== ""){
		if(b<alpha.length){
			var num = alpha[b];
			document.getElementById("sub2").innerHTML = num;
		}else if(b>=alpha.length){
			b %= 26;
			var num = alpha[b];
			document.getElementById("sub2").innerHTML = num;
		}
	}
};
//========================================= 3rd Section[Vigenere Cipher] =================================================
var Vigenere = document.getElementById("vig-btn");
Vigenere.onclick = function(){
	var vigkey = document.getElementById("vig-key").value;
	var vigpln = document.getElementById("vig-pln").value;
	var upperCase1 = vigkey.toUpperCase();
	var upperCase2 = vigpln.toUpperCase();
	if(vigkey.length == vigpln.length){
		for(var txtCount = 0; txtCount<vigkey.length; txtCount++){
			var uppertxt1 = upperCase1.substr(txtCount,1);
			var uppertxt2 = upperCase2.substr(txtCount,1);
			var uppertxt2ix = alpha.indexOf(uppertxt2);
			for (var alphatxt=0; alphatxt < alpha.length; alphatxt++) {
				var Alphabet = [alpha[alphatxt]];
				if(Alphabet == uppertxt1){//check if alphabet is equal to text 
					var myAlpha = alpha[alphatxt];
					var myAlphaix = alpha.indexOf(myAlpha);
					var count = Number(uppertxt2ix) + Number(myAlphaix);
					count %= 26;
					var countAlphabet = alpha[count];
					encArr[txtCount] = countAlphabet;
				}
			}
		}
		var toStrng = encArr.toString(); // convert array to string
		noComma = toStrng.replace(/,/g,""); //show array without comma
		var hide = document.getElementById("vig-cph");
		if (hide.className === "hidden") { //on click the div2 hidden will be visible
			hide.className = "visible-lg";
			hide.className += " visible-md";
			hide.className += " visible-sm";
			hide.className += " visible-xs";
		}
		document.getElementById("vig-cph").innerHTML = "<h4>Encrypted text :<h4>" + "<p id='p'><mark>" + noComma + "</mark></p>";

	}else{
		alert("please enter number of keyword alphabet equal to number of plaintext alphabet");
	}
}
//========================================= 4th Section[Vernam Cipher] ===================================================
var vnm = document.getElementById("vnm-btn");
vnm.onclick = function(){
	var vnm = document.getElementById("vnm").value;
	var upperCase = vnm.toUpperCase();
	for(var txtCount = 0; txtCount<vnm.length; txtCount++){
		var uppertxt = upperCase.substr(txtCount,1);
		for (var alphatxt=0; alphatxt < alpha.length; alphatxt++) {
			var Alphabet = [alpha[alphatxt]];
			if(Alphabet == uppertxt){//check if alphabet is equal to text 
				var rndm = Math.random();
				rndm *= 100;
				rndm = Math.ceil(rndm);
				var vnmCount = Number(alphatxt) + Number(rndm);
				vnmCount %= 26;
				encArr[vnmCount] = Alphabet;
			}
		}
	}
	var toStrng = encArr.toString(); // convert array to string
	noComma = toStrng.replace(/,/g,""); //show array without comma
	var hide = document.getElementById("vnm-cph");
	if (hide.className === "hidden") { //on click the div2 hidden will be visible
		hide.className = "visible-lg";
		hide.className += " visible-md";
		hide.className += " visible-sm";
		hide.className += " visible-xs";
	}
	document.getElementById("vnm-cph").innerHTML = "<h4>Encrypted text :<h4>" + "<p id='p'><mark>" + noComma + "</mark></p>";
}
//========================================= 5th Section[Key Calculater] ==================================================
var keyCalculater = document.getElementById("key-btn");
keyCalculater.onclick = function(){
	var kpt = document.getElementById("kpt").value;
	var kct = document.getElementById("kct").value;
	var upperCase1 = kpt.toUpperCase();
	var upperCase2 = kct.toUpperCase();
	if(kpt.length == kct.length){
		for(var txtCount = 0; txtCount<1; txtCount++){
			var uppertxt1 = upperCase1.substr(txtCount,1);
			var uppertxt2 = upperCase2.substr(txtCount,1);
			var uppertxt1ix = alpha.indexOf(uppertxt1);
			var uppertxt2ix = alpha.indexOf(uppertxt2);
			if(uppertxt1ix>uppertxt2ix){		
				var calc = 26 - Number(uppertxt1ix);
				 calc += Number(uppertxt2ix);
			}else if(uppertxt1ix<uppertxt2ix){
				var calc = Number(uppertxt2ix) - Number(uppertxt1ix);
			}else if(uppertxt1ix == uppertxt2ix){
				var calc = uppertxt1ix;
			}
			var hide = document.getElementById("key");
			if (hide.className === "hidden") { //on click the div2 hidden will be visible
				hide.className = "visible-lg";
				hide.className += " visible-md";
				hide.className += " visible-sm";
				hide.className += " visible-xs";
			}
		}
		document.getElementById("key").innerHTML = "<h4>Key Is :<h4>" + "<p id='p'><mark>" + calc + "</mark></p>";
	}else{
		alert("please enter number of ciphertext alphabet equal to number of plaintext alphabet");
	}
};
//========================================= 6th Section[Task] ============================================================
var sensr = document.getElementById("tsk");
sensr.onkeyup = function(){
	var txt = document.getElementById("tsk").value;
	var snsr = document.getElementById("sensor");
	var mod = txt.length % 4;
	if(mod==0){
		snsr.setAttribute("class","col-lg-1 col-md-11 col-sm-11 col-xs-11 sens");
		for (var txtCount = 0; txtCount < txt.length; txtCount++) {
			var uppertxt = txt.substr(txtCount,1);
			encArr[txtCount] = uppertxt;
			var td;
			var hide = document.getElementById("tsk-div");
			if (hide.className === "hidden") { //on click the div2 hidden will be visible
				hide.className = "visible-lg";
				hide.className += " visible-md";
				hide.className += " visible-sm";
				hide.className += " visible-xs";
			}
			/*if(txt.length > 4){
				var x = Number(txt.length) / 4;
				td += "<td>"+ uppertxt + "</td>";
				for(var i = 0; i < x; i++){
					content = "<tr>" + td + "</tr>";
				}
			}*/
		}
		var colomn2 = [encArr[0],encArr[4],encArr[8]];
		var colomn3 = [encArr[1],encArr[5],encArr[9]];
		var colomn1 = [encArr[2],encArr[6],encArr[10]];
		var colomn4 = [encArr[3],encArr[7],encArr[11]];
		var tstr2 = colomn2.toString(),
			tstr3 = colomn3.toString(),
			tstr1 = colomn1.toString(),
			tstr4 = colomn4.toString();
		col2 = tstr2.replace(/,/g, ""),
		col3 = tstr3.replace(/,/g, ""),
		col1 = tstr1.replace(/,/g, ""),
		col4 = tstr4.replace(/,/g, "");
		document.getElementById("tsk-div").innerHTML ="<h4>Encrypted text :<h4>" + "<p id='p'><mark>" + col1 + " " + col2 + " " + col3 + " " + col4 + "</mark></p>";
	}else{
		snsr.setAttribute("class","col-lg-1 col-md-11 col-sm-11 col-xs-11 sensor");
	}
};
//========================================= 0 page[Scroll] ===============================================================
function scrollWin() {window.scrollBy(0, -5000);}