

//task2:
//exm1
var arr=[
    "Always use === instead of ==",
        "Use const by default",
        "Keep your code clean",
        "Use meaningful variable names",
        "Avoid global variables",
        "Break code into functions",
        "Use console.log for debugging",
        "Practice regularly",
        "Comment complex code",
        "Learn from errors"
    ];
   var randomIndex = Math.floor(Math.random() *10);
   console.log(randomIndex);
   
 var randomTip = arr[randomIndex];
 console.log(randomTip)
    

/*
   

//exm2
function Datenow()
{
    
    document.getElementById('date').innerHTML=new Date().toLocaleString();
}





//exm3

var email = prompt("Enter your email");

var i = email.indexOf("@");

if(i != -1 && i != 0 && i != email.length-1)
{
    console.log("Valid Email");
}
else
{
    console.log("Invalid Email");
}


//exm 4
var x= window.prompt ("enter your full name ")
var y= window.prompt ("enter your email ")
var emailRegex = ("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$") 
if (x.match(nameRegex)&&y.match(emailRegex))

    {
        console.log("valid name & email")
        console.log(x)
         console.log(y)
    }


else{
    console.log("again")
}



//exm 6
var arr= [60, 100,10,15,85]
console.log( arr.reverse())
console.log(arr.filter (function (item)
{
    return item<60;
}))

console.log(arr.find(function(degree)
{
return degree <=100;
}

))


//exm7
var arr=[
   {
        name:"amany ",
        degree:50
    },
    {
        
        name:"mona ",
        degree:99
    },
     {
        
        name:"esraa" ,
        degree:55
    }


]
console.log(arr.find(function(i)
{
    return i.degree >90 && i.degree<100
}))
console.log(arr.filter(function (d)
{
    return d.degree <60
}
))
 
console.log(arr.sort(function(a, b) {
    return a.name.localeCompare(b.name);//......
}))

console.log( arr.push({name:"manar",degree:30}))
console.log(arr)
console.log(arr.splice(2,0,
    {name:"menna",degree:80},
    {name:"hala",degree:40}
))
var s=arr.splice(3,1)
console.log(arr)

console.log(arr.pop())
console.log(arr)


//exm8



function showDate() {

    var input = prompt("Enter your birth date (DD-MM-YYYY)");

    if (isValidDate(input)) {

        var day = parseInt(input.substring(0, 2));
        var month = parseInt(input.substring(3, 5)) - 1; 
        var year = parseInt(input.substring(6));

        var date = new Date(year, month, day);

        alert(date.toDateString());

    } else {
        alert("Wrong Date Format");
    }
}

function isValidDate(str) {

    if (str.length !== 10) return false;

    if (str.charAt(2) !== '-' || str.charAt(5) !== '-') return false;

    return true;
}
//........

*/