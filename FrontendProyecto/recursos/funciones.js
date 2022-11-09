let colores = ["#626d71", "#cdcdc0", "#ddbc95", "#b38867", "white", "black"]

function cambiarFondo(){
    let indice = parseInt(Math.random()*6)-1;
    let color = colores[indice];
    document.querySelector("body").style.backgroundColor = color;
}