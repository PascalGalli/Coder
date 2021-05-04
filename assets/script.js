function textCoder(text, ckey){
	var codeChar = 0;
	var char = '';
	var result = "";
	//lo metto tutto in lowercase
	text = text.toLowerCase();

	//ciclo per sostituire
	for(var i = 0; i < text.length; i++){
		codeChar = text.charCodeAt(i);
		char = String.fromCharCode(codeChar - ckey);
		//stampo in console log il char
		console.log(char);

		result = result.concat(char);
	}

	console.log("Ritorno: " + result);
	return result;
}

//Text Decoder
//unction textDecoder(text){}


//check ckey
function checkCkyey(ckey){
	var def = 0;

	if(ckey === null || ckey === undefined){
		def = 64;
	}else if(ckey > 128 || ckey <= 0){
		def = 64;
	}else{
		def = ckey;
	}

	return def;
}

/////////////////
// LIVE UPDATE //
/////////////////
function liveUpdate(){
	const input = document.getElementById("inputtxt");
	const output = document.getElementById("text-val");
	const form = document.getElementById("form");
	var ckey = document.getElementById("ckey").value;
	var result = "";

	//controllo ckey
	ckey = checkCkyey(ckey);

	for(var i = 0; i < input.value.length; i++){
		if(input.value == "" || input.value === null){
			result = "";
		}else{
			result = textCoder(input.value, ckey);
			//var keylenght = (ckey.ToString(10)).length;
			//tolgo la key alla fine del result
			//result = result.substr( (input.value,length - keylenght), keylenght)
		}
		
		output.innerHTML = "";
		output.innerHTML = result;
	}
}

//Funzione per il download
function download(filename, text){
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

//Start file Download
document.getElementById("dwn-btn").addEventListener("click", function(){
	var title = document.getElementById("title").value;
	var ckey = document.getElementById("ckey").value;
	var text = document.getElementById("text-val").value;
	//altre variabili
	var filename = "";

	//CONTROLLI
	//titolo di default
	if(title.length == 0){
		title = "Coder";
		filename = title.concat(".txt");
	}else{
		filename = title.concat(".txt");
	}
	
	//inserisco una coded key (ckey) di default
	ckey = checkCkyey(ckey);
	
	var text_coded = textCoder(text, ckey);
	//concateno la chiave con il testo
	text_coded = text_coded.concat(ckey);
	console.log("Testo codificato: " + text_coded);
	//var filename = title.concat(".txt");
	console.log("Filename: " + filename);

	download(filename, text_coded);
}, false);
//*/