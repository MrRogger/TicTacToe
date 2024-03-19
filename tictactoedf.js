turno=0;

griglia=[["","",""],
		 ["","",""],
		 ["","",""]];

function initialize(){
	turno=0;
	var scritta=document.getElementById("vincitore");
	scritta.innerHTML="";
	griglia=[["","",""],
			 ["","",""],
			 ["","",""]];
	var tab=document.getElementById("tabella");
	var s="";
	for(var i=0; i<3; i++){
		s+="<tr>";
		for(var j=0; j<3; j++){
			s+='<td id="'+i+j+'" onclick="cliccaCella(this)"><p class="nascosto">A</p></td>';
		}
		s+="</tr>";
	}
	tab.innerHTML=s;
}

function cliccaCella(el){
	var id=el.id;
	var x=id%10;
	var y=(id-x)/10;
	if(griglia[y][x]==""){
		if(turno%2==0){
			el.innerHTML='<p class="X">X</p>';
			griglia[y][x]="X";
			controllaVincita("X");
		}else{
			el.innerHTML='<p class="O">O</p>';
			griglia[y][x]="O";
			controllaVincita("O");
		}
		turno++;
	}
}

function controllaVincita(pg){
	var vincita=false;
	for(var i=0; i<3; i++){
		if((griglia[0][i]==pg && griglia[1][i]==pg && griglia[2][i]==pg) ||
		   (griglia[i][0]==pg && griglia[i][1]==pg && griglia[i][2]==pg) ){
			vincita=true;
		}
	}
	if((griglia[0][0]==pg && griglia[1][1]==pg && griglia[2][2]==pg) ||
	   (griglia[0][2]==pg && griglia[1][1]==pg && griglia[2][0]==pg) ){
		vincita=true;
	}
	if(vincita || turno>=8){
		griglia=[["F","F","F"],
				 ["F","F","F"],
				 ["F","F","F"]];
		var scritta=document.getElementById("vincitore");
		if(vincita){ scritta.innerHTML='<h2 onclick=initialize()>Ha vinto il giocatore '+pg+'! Clicca qua per rigiocare</h2>';}
		else{ scritta.innerHTML='<h2 onclick=initialize() class="pareggio">Avete pareggiato! Clicca qua per rigiocare</h2>';}
	}
}