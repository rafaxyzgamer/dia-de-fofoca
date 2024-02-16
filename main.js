function addUser(){
    nomearmazenado = document.getElementById("caixaDeTexto").value;
    localStorage.setItem("nomeusuario", nomearmazenado);
    window.location="fofofoca_room.html";
}