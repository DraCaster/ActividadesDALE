let pintado = false; // En el juego , si se selecciona una imagen esta var se pone en true
let letraSelec = null;



const quitarAnimacion = () => {
    let element = document.getElementById("ayudabtn");
    element.classList.remove("pulse");
    let ocultarMano = document.getElementById("manoayuda")
    ocultarMano.classList.add("imgOcultar")

    let element2 = document.getElementById("manoayuda2")
    element2.classList.remove("imgOcultar")
    element2.classList.add("slideRightBtn")
}

const ocultarElement = id => {
  let elem = document.getElementById(id)
  elem.classList.add("imgOcultar")
}

const quitarAnim = id => {
  let elem = document.getElementById(id)
  elem.classList.remove("pulse")
}

const animar = (id) => {
  let elem = document.getElementById(id)
  elem.classList.add("pulse")
}

const mostrarImgPrincipal = (url,titulo) => {
 
  let tabla = document.getElementById("tabla1-1")
  tabla.classList.remove("imgOcultar")
  tabla.classList.add("tabla1-1")

  let elementImg = document.getElementById("imgj1");
  elementImg.classList.add("imgJuegosG")
  console.log('elemimg',elementImg)
  let elementTitulo = document.getElementById("tituloj1");
  elementImg.src=url;
  elementTitulo.innerHTML= titulo
}

/*Selecciona con color una imagen elegida, y comprueba que 
no haya otra seleccionada, en ese caso, la despinta, y pinta la nueva */
function enmarcar(event) {
  let element = document.getElementById("manoayuda2")
  element.classList.add("imgOcultar")
  element = document.getElementById("u")
  element.classList.remove("pulse")

  selec = event.target;
  if (pintado == false) {
    selec.className += " cambiarBorde";
    pintado = true;
    letraSelec = selec.id;
   
  } else {
    $(".cambiarBorde").removeClass("cambiarBorde");
    selec.className += " cambiarBorde";
    letraSelec = selec.id;
   
  }
}
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");

/*Cartelito*/

function confirmar(s) {
  sndOK.play();
  alertify.alert(
    "<img src='../assets/feliz.png'> <h3>&iexcl; EXCELENTE !</h3>",
    function () {
        alertify.success("CARGANDO...");
        setTimeout(function () {
          window.location.href = "../html/" + s + ".html"; //Pasa al siguiente juego
        }, 1300);
    }
  );
  return false;
}

function alerta() {
  //un alert
  sndNO.play();
  alertify.alert(
    "<img src='../assets/triste.png'> <h3> &iexcl; INTENTALO DE NUEVO ! </b></h3>",
    function () {
      //aqui introducimos lo que haremos tras cerrar la alerta.
    }
  );
}

/* Verifica que la imagen seleccionada sea la correcta */
function comprobar(s) {
  pintado = false;
  $(".cambiarBorde").removeClass("cambiarBorde"); //la imagen seleccionada se despinta
  if (letraSelec == "u") {
    confirmar(s);
  } else {
    alerta();
  }
}

//JuegoExtra

const checkGameExtra = (s) => {
  let a = checkTableGameExtra('o',['o','l','a'])
  let b = checkTableGameExtra('o1',['o','s','o'])
  let c = checkTableGameExtra('u',['u','n','o'])
  if(a && b && c){
    confirmar(s)
  }else{
    alerta()
  }
  
}


const checkTableGameExtra = (letra, letras) => {
    let tabla = $('#' + letra);
    let items = tabla.children('tbody').children('tr').find('img');

    let cont = 0;
    let padre;
    let hijo;
   
    console.log('itemslength',items.length)
    for (var i = 0; i < items.length; i++) {

        console.log('indice',i)
        console.log('longletras',letras.length)
        console.log('letraimg',items[i].dataset.letra)
        console.log('letraposicion',letras[i])
        console.log('letra if',items[i].dataset.letra)
        console.log('letra if 1',letra[i])
        console.log('if',items[i].dataset.letra == letra[i])
        if (items[i].dataset.letra == letra[i]){
          cont++;
        }
        if (items[i].dataset.letra != letras[i]){
            hijo = document.createElement("div");
            hijo.className+="item";
            hijo.appendChild(items[i]);
            padre = document.getElementById('pos-'+items[i].dataset.pos);
            padre.appendChild(hijo);
        }
       
        
    }

    //Le devuelvo la propiedad arrastrable a cada imagen
    $('.item').draggable({
                helper: 'clone'
            });

            $('.box-image-rayitas').droppable({
                accept: '.item',
                hoverClass: 'hovering',
                drop: function(ev, ui) {
                    ui.draggable.detach();
                    $(this).append(ui.draggable);
                }
    });
    console.log('cont',cont)
   return (cont==3);
}

