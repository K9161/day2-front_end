
function saveData(){
 var username=document.getElementById("username").value 
 var password=document.getElementById("password").value

  uer=  localStorage.setItem("username",username)
  pass= localStorage.setItem( "password",password)
}
