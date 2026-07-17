//exm1 && exm2
 function ALLData(){
           

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var remember = document.getElementById("rememberMe").checked;

            if (remember) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }
        }

        window.onload = function () 
        {
            var user = localStorage.getItem("username");
            var pass = localStorage.getItem("password");

                document.getElementById("username").value = user;
                document.getElementById("password").value = pass;

                
               
        }
/*
1- no .. i want the user  always to store his data and not deleted when i close the browser
2-local storage ..>permenant 
sassion storage..>violated
3-yes.. but must have the  same domain

*/


//exm3

var id = Number(prompt("enter id"));
var name = prompt("enter name");
var age = Number(prompt("enter age"));
var address = prompt("enter address");

var person = {
    id: id,
    name: name,
    age: age,
    address: address,
    skills: ["html", "css", "js"],
    isLeader: true
};
var y=localStorage.setItem("person", JSON.stringify(person));
var data = JSON.parse(localStorage.getItem("person"));
console.log(data);

//exm4
var students = [
    {
        id: 1,
        name: "Amany",
        age: 21,
        address: "Beni Suef",
        skills: ["HTML", "css"],
        isLeader: true
    },
    {
        id: 2,
        name: "sara",
        age: 22,
        address: null,
        skills: ["JS", "React"],
        isLeader: false
    },
    {
        id: 3,
        name: "Esraa",
        age: 20,
        address: "Cairo",
        skills: ["HTML", "CSS", "JS"],
        isLeader: true
    }
]
for(var i=0;i<students.length;i++)
{
    console.log("name:"+students[i].name)
        console.log("skills:"+students[i].skills)
}

/*
1-yes 
2-xml..>uses in APIS ,very hard
json..> uses in js, easy

*/

//exm5
