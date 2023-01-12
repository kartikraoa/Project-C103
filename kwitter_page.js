const firebaseConfig = {
    apiKey: "AIzaSyBKhQt1mQiu1NO_YippbUgKb5AypaQiYMc",
    authDomain: "lets-chat-web-app-e71fa.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-e71fa-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-e71fa",
    storageBucket: "lets-chat-web-app-e71fa.appspot.com",
    messagingSenderId: "283124839060",
    appId: "1:283124839060:web:e67fae7a90a3eed9513a81"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send()
  {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}
  