let bandera=true
let boton=document.getElementById("boton");
boton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault();
    console.log("haciendo click");
    let buscador=document.getElementById("buscador");
    if(bandera==true){
        buscador.classList.remove("invisible");
    }else{
        buscador.classList.add("invisible");
    }
        bandera=!bandera
}