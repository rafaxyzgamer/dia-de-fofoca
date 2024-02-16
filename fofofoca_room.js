
const firebaseConfig = {
    apiKey: "AIzaSyBvShpzsQwuRVrXOH5Llx5xGs91nH3yHFA",
    authDomain: "project-8093770468331130772.firebaseapp.com",
    databaseURL: "https://project-8093770468331130772-default-rtdb.firebaseio.com/",
    projectId: "project-8093770468331130772",
    storageBucket: "project-8093770468331130772.appspot.com",
    messagingSenderId: "51241503812",
    appId: "1:51241503812:web:ea0cd3868308384614c011"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("nomeusuario");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";


function addRoom() {

    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adicionar sala"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "fofofoca_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}
// Para obter os dados do banco de dados e exibi-los na página de salas do ChatRoom


//complete com amor
function redirectToRoomName(name) {

}
//complete com paciência
function logout() {

}
