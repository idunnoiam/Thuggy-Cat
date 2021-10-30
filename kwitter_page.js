//YOUR FIREBASE LINKS



const firebaseConfig = {
    apiKey: "AIzaSyClY_6AZHQfTPt5ptLQq958G2c_5vQJg9s",
    authDomain: "practice-project-da2cf.firebaseapp.com",
    databaseURL: "https://practice-project-da2cf-default-rtdb.firebaseio.com",
    projectId: "practice-project-da2cf",
    storageBucket: "practice-project-da2cf.appspot.com",
    messagingSenderId: "261322858292",
    appId: "1:261322858292:web:624621b33bc4ec10f24f61"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();



function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}