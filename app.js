let cantidad = document.getElementById("cantidad");
let repeticiones = document.getElementById("repeticiones");
let boton = document.getElementById("input__btn");
let grafica = document.querySelector(".container-graf__list");

function calcularPorcentajes (arrRep, totalRep) {
  let arrPorcentajes = [];
  for (let cantRep of arrRep) {
    let p = Math.round((cantRep/totalRep)*100);
    arrPorcentajes.push(p);
  }
  return arrPorcentajes;
}

function redibujar (arrPorc) {
  grafica.innerHTML="";
  for (let i=0;i<cantidad.value;i++){
    let n=i+1;
    let elementoHTML = `<li class="container-graf__item item-${n}">
                          <p class="container-graf__dato"><span class="resaltar">${n}:</span>${arrPorc[i]}%</p>
                        </li>`
    grafica.innerHTML+=elementoHTML;
    let barrita = document.querySelector(`.item-${n}`);
    barrita.style.height = `${arrPorc[i]}%`;
  }

}

function calcularGrafica(cant, rep){

  let arrRep = [];
  for (let i=0;i<cant;i++){arrRep.push(0);}
  for (let i=0;i<rep;i++) {
    let valorAleatorio = Math.floor(Math.random()*cant);
    arrRep[valorAleatorio] = arrRep[valorAleatorio] + 1;
  }
  let arrPorcentajes = calcularPorcentajes(arrRep,rep);
  redibujar(arrPorcentajes);
}

boton.addEventListener("click",()=>{

  if (cantidad.value=="") {
    cantidad.value=5;
  }
  if (repeticiones.value=="") {
    repeticiones.value=100;
  }
  if (cantidad.value>=2 && cantidad.value<=10 && repeticiones.value>=100 && repeticiones.value<=1000) {
    calcularGrafica(cantidad.value,repeticiones.value);
  } else {
    console.log("Has ingresado datos fuera del rango permitido.");
    cantidad.value=5;
    repeticiones.value=100;
  }
});
