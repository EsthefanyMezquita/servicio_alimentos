let points = 0;
let toothBrushForce = 0.4;
var manchas = document.getElementsByClassName("manchas");
var pmarcador= document.getElementById("puntosMarcador");
var manchasLengua = document.getElementsByClassName("manchasLengua");

//for para hacer invisibles las manchas lengua
for (let i = 0; i < manchasLengua.length; i++) { 
  manchasLengua[i].style.display= 'none';
}


function interaction(i) {
  
	manchas[i].initialOpacity = manchas[i].initialOpacity - toothBrushForce;
	manchas[i].style.opacity = `${manchas[i].initialOpacity}`;

    points++;

	if (manchas[i].initialOpacity <= 0) {
		//alert(`Que chido limpias we, tienes estos puntos: ${points}`);
    manchas[i].style.display= 'none';
	}
  


  if(points == 24){
    alert(`No te olvides de limpiar la lengua tambien!`);
    for (let i = 0; i < manchasLengua.length; i++) { 
      manchasLengua[i].style.display= 'inherit';
    }
    
  }
  
  drawScore(points);

}

function interactionLengua(i) {
  
	manchasLengua[i].initialOpacity = manchasLengua[i].initialOpacity - toothBrushForce;
	manchasLengua[i].style.opacity = `${manchasLengua[i].initialOpacity}`;

    points++;

	if (manchasLengua[i].initialOpacity <= 0) {
		//alert(`Que chido limpias we, tienes estos puntos: ${points}`);
    manchasLengua[i].style.display= 'none';
	}
  

  if(points > 29){
    alert(`Muy bien! Recuerda cepillarte 3 veces al día y cuidar de limpiar la lengua para evitar las caries. Obtuviste: `+points+ ' puntos');
    document.location.reload();

  }
  
  drawScore(points);

}

for (let i = 0; i < manchas.length; i++) { 
  manchas[i].initialOpacity = 1;
  manchas[i].setAttribute("id","a"+i);
  manchas[i].style.opacity = `${manchas[i].initialOpacity}`;
  manchas[i].addEventListener("click", e => {
    console.log(e.currentTarget.id);
    interaction(e.currentTarget.id);
    

  });
}


function drawScore(points) {
  pmarcador.innerHTML="Puntos: "+ points;
}

for (let i = 0; i < manchasLengua.length; i++) { 
  manchasLengua[i].initialOpacity = 1;
  manchasLengua[i].setAttribute("id","a"+i);
  manchasLengua[i].style.opacity = `${manchasLengua[i].initialOpacity}`;
  manchasLengua[i].addEventListener("click", e => {
    console.log(e.currentTarget.id);
    interactionLengua(e.currentTarget.id);
    

  });
}