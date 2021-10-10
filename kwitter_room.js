const firebaseConfig = {
    apiKey: "AIzaSyAncFNlICfkshqQ6UPb4lzXeVCaqQsM4Ik",
    authDomain: "kwitter-8623d.firebaseapp.com",
    databaseURL: "https://kwitter-8623d-default-rtdb.firebaseio.com",
    projectId: "kwitter-8623d",
    storageBucket: "kwitter-8623d.appspot.com",
    messagingSenderId: "741524547288",
    appId: "1:741524547288:web:10b21af442e36a7c65d9ad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();