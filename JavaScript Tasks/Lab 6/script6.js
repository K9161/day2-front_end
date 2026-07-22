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


        // =========================
        // 1) Students Array
        // =========================

        var students = [
            {
                id: 1,
                name: "Amany",
                age: 21,
                address: "Beni Suef",
                skills: ["HTML", "CSS"],
                isLeader: true
            },
            {
                id: 2,
                name: "Sara",
                age: 22,
                address: null, // المطلوب
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
        ];

        var studentsDiv = document.getElementById("students");

        for (var i = 0; i < students.length; i++) {

            studentsDiv.innerHTML += `
                <div class="card">
                    <h3>${students[i].name}</h3>
                    <p>Skills: ${students[i].skills.join(", ")}</p>
                </div>
            `;
        }


        // =========================
        // 2) AJAX API
        // =========================

        var usersData = [];

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://reqres.in/api/users");

        xhr.onload = function () {
            if (xhr.status == 200) {

                var response = JSON.parse(xhr.responseText);
                usersData = response.data;

                var select = document.getElementById("users");

                usersData.forEach(function(user){
                    select.innerHTML += `
                        <option value="${user.id}">
                            ${user.first_name} ${user.last_name}
                        </option>
                    `;
                });
            }
        };

        xhr.send();


        // =========================
        // 3) Show Selected User
        // =========================

        function showUser() {

            var id = document.getElementById("users").value;

            var user = usersData.find(function(u){
                return u.id == id;
            });

            var div = document.getElementById("userData");

            if (user) {
                div.innerHTML = `
                    <div class="card">
                        <h3>${user.first_name} ${user.last_name}</h3>
                        <img src="${user.avatar}" width="150">
                        <p>Email: ${user.email}</p>
                    </div>
                `;
            } else {
                div.innerHTML = "";
            }
        }

/*
1-yes 
2-xml..>uses in APIS ,very hard
json..> uses in js, easy

*/



//5-