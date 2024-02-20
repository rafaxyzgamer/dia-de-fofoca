
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
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' width='80px' src='check.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='bi bi-hand-thumbs-up'> Like: " + like + "</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function updateLike(message_id) {
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;

    firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
    });

}


function logout() {
    localStorage.removeItem("nomeuario");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

