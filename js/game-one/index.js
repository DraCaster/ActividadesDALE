/*Functions by game one*/
var pintado = false; // En el juego , si se selecciona una imagen esta var se pone en true
let letraSelec = null;

const enmarcarGameExtra = event => {

  let selec = event.target;
  if (pintado == false) {
    selec.className += "cambiarBordeLetras";
    pintado = true;
   
  } else {
    $(".cambiarBordeLetras").removeClass("cambiarBordeLetras");
    selec.className += " cambiarBordeLetras";
   
  }
}


/*Selecciona con color una imagen elegida, y comprueba que 
no haya otra seleccionada, en ese caso, la despinta, y pinta la nueva */
function enmarcar(event) {
    selec = event.target;
    letraSelec = selec.id;
    if (!pintado) {
        selec.className += " cambiarBorde";
        pintado = true;
    } else {
        $('.cambiarBorde').removeClass("cambiarBorde");
        selec.className += " cambiarBorde";
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
  removeAnimation('btn-check-j1','pulse')
  pintado = false;
  $('.cambiarBorde').removeClass("cambiarBorde");
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

