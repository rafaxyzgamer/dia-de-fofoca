
const firebaseConfig = {
    apiKey: "AIzaSyCLF3Dyaxi0ZBd4eso40iiE_ezOqbAmaME",
    authDomain: "diadefofoca.firebaseapp.com",
    databaseURL: "https://diadefofoca-default-rtdb.firebaseio.com/",
    projectId: "diadefofoca",
    storageBucket: "diadefofoca.appspot.com",
    messagingSenderId: "252218180966",
    appId: "1:252218180966:web:c481aba5933975def174a7"
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
getData();


//complete com amor
function redirectToRoomName(name) {
    localStorage.setItem("room_name", name);
    window.location = "fofofoca_page.html";
}
//complete com paciência
function logout() {
    localStorage.removeItem("nomeuario");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
