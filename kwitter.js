function adduser (){
    username=document.getElementryById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location="kwitter_room.html";
}