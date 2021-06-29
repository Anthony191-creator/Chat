  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAzchT30ibIVtBpjMcrsit2C_jUYHWIR_4",
      authDomain: "kwitter2-d919c.firebaseapp.com",
      databaseURL: "https://kwitter2-d919c-default-rtdb.firebaseio.com",
      projectId: "kwitter2-d919c",
      storageBucket: "kwitter2-d919c.appspot.com",
      messagingSenderId: "1002438602636",
      appId: "1:1002438602636:web:567cb42ee711349061b0a9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name + "!";
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child("room_name").update({
      purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}
function getData()
 { 
       firebase.database().ref("/").on('value', function(snapshot) 
       { 
             document.getElementById("output").innerHTML = "";
              snapshot.forEach(function(childSnapshot)
               {
                      childKey = childSnapshot.key;
                       Room_names = childKey;
                        console.log("Room Name - " + Room_names);
                         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                        document.getElementById("output").innerHTML += row; 
                  }); 
            });
       } 
       getData();

function  redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function  logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}



