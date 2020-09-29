/*Functions to all games */
const soundOK = new Audio("../sonidos/ganaste.wav");
const soundNO = new Audio("../sonidos/error.wav");

//Te lleva a una ruta especifica 
const redirectRoute = route => {

    playSound("assets/sound/selec.wav")
    setTimeout(() =>{
        window.location.href = route;
    }, 300);
}

//@Parameters
//routeSound: String - Ruta del sonido a reproducir
const playSound = routeSound => {
    let sound = new Audio(routeSound)
    sound.play()
}

//Te lleva al menu principal, muestra un alerta avisando
const redirectMenu = () => {
    playSound("../assets/sound/selec.wav")
    alertify.success("<img src='../assets/flechaizquierda.png'> SALIENDO... ");
    setTimeout(function() {
        window.location.href = '../index.html';
    }, 1300);
}

//Oculta un elemento html
//Id del elemento a ocultar
const hideElement = idElement => {
    let elem = document.getElementById(idElement)
    elem.classList.add("hideElement")
}

const viewElement = (idElement) => {
    let elem = document.getElementById(idElement)
  elem.classList.remove("hideElement")
}

const animationElement = (idElement,animation) => {
    let elem = document.getElementById(idElement)
    elem.classList.add(animation)
}

//Elimina animacion de un elemento
//Id del elemento a quitar la animacion
//clase que provee la animacion
const removeAnimation = (idElement, animation) => {
    let elem = document.getElementById(idElement)
    elem.classList.remove(animation)
}

const AlertError = () => {
    
  soundNO.play();
  alertify.alert(
    "<img src='../assets/triste.png'> <h3> &iexcl; INTENTALO DE NUEVO ! </b></h3>",
    function () {
      //aqui introducimos lo que haremos tras cerrar la alerta.
    }
  );
}

const AlertOK = routeNextGame => {

    soundOK.play();

    alertify.alert(
      "<img src='../assets/feliz.png'> <h3>&iexcl; EXCELENTE !</h3>",
      function () {
          alertify.success("CARGANDO...");
          setTimeout(() => {
            window.location.href = routeNextGame; //Pasa al siguiente juego
          }, 1300);
      }
    );
}