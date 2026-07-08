
//task1 :-
//exm1

 window.alert("welcome to my site")
 var name=window.prompt ("enter your name")
 console.log("welcome "+name)

//exm2

function result(a,b)
{
   

     var res=a+b;
     return res;

}


function handleClick()
{
    var num1=window.Number(prompt("enter num1"))
    var num2=window.Number(prompt("enter num2"))

   var y= result(num1,num2)
    console.log(y)
}


//exm3

 function temp(t)
 {
     
     {
    console.log(t>=30?"hot":"cold")
     }
 }

 temp(10)


 //exm4

 function temp(tempr,actual)
 {
     if(25 >=tempr&&tempr<=30 &&actual>=25&&actual<=30)
     {console.log("normal")}
     else if(tempr&&actual<25)
     {console.log("cold")}
     if(tempr&&actual>30)
     {console.log("hot")}
     else{
     console.log("Ambiguous, can’t detect") 
     }
 }
 temp(26,35);
 
 
//exm 5
function check(studentfaculty)
{
if(studentfaculty=="FCI")
{
    console.log("You’re eligible to Programing tracks")
}
else if(studentfaculty=="engineering")
{
    console.log("You’re eligible to Network and Embedded tracks")
}
else if(studentfaculty=="commerce")
{
    console.log("You’re eligible to ERP and Social media tracks")


}
else 
{
    console.log("You’re eligible to SW fundamentals track")


}
}
check("commerce") 
//using switch:
//exm 5
function check(studentfaculty)
{
switch(studentfaculty)
{
    case "FCI":
        console.log("You’re eligible to Programing tracks")
        break;
    case "engineering":
        console.log("You’re eligible to Network and Embedded tracks")
        break;
        case "commerce":
            console.log("You’re eligible to ERP and Social media tracks")
            break;
            default:
                console.log("You’re eligible to SW fundamentals track")
}
}
check("commerce") 
/*switch is better than if because it is easier when we have many cases for the same variable */




//exm 6
function get(n1,n2)
{
    for(var i=n1;i<n2;i+=2)
    if (n1%2!=0 || n2%2!=0)
    {
        console.log("odd nuber is "+i)
      
    }
    else{
        console.log("not odd number")
    }
}
get(1,10)

//exm7

function mathexpretion() {
            var exp = prompt("Enter math expression (Ex: 3+4*5/10*8)");
            
            var result = calculate(exp);

            alert(result);
        }

        function calculate(expression) {
            return eval(expression);// بتحول النص لعملية حسابية 
        }



//exm8

    var name;
    while (true) {
        name = prompt("Enter your name:");

        
        if (name && isNaN(name)) {
            break;
        } else {
            alert("Invalid name..Please enter a valid string");
        }
    }

   
    var birthYear;
    while (true) {
        birthYear =Number( prompt("Enter your birth year:"));ر 
        

        
        if ( birthYear < 2010) {
            break;
        } 
        else {
            alert("Invalid year! Enter a number less than 2010.");
        }
    }

    
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;

   
    document.write("Name: " + name);
    document.write("Birth year: " + birthYear  );
    document.write("Age: " + age );


 // 1-
function foo() {
    var x;
    x = 5;
    y = 6;    return x + y;
    when ue trict ..>uneinddd
    not ussing it..>result =11
}

//2-
var y;	
y=10; 
x = 5; 
console.log(x); 
console.log(y);
console.log(foo());
"not use because y is not defined"


//3-
//What’s the value of y variable in the following code? And why?
var x = 5; 
console.log(x); 
console.log(y); 
var y = 7; 

//"undeinedd because of hoisting ..>y is declared but not assigned value yet"



//4 ?????

//bouns 1-
for (var i = 1; i <= 6; i++) {
    document.write("<h" + i + ">welcome to my page</h" + i + ">");
}




//task2:
//exm1
var arr=["Always use === instead of ==",
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

    for(var i=0; i<arr.length; i++)
    {
        document.getElementById('tip').innerHTML="Tip of the day is : "+arr[i]
        
    }
    



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

    let input = prompt("Enter your birth date (DD-MM-YYYY)");

    if (isValidDate(input)) {

        let day = parseInt(input.substring(0, 2));
        let month = parseInt(input.substring(3, 5)) - 1; 
        let year = parseInt(input.substring(6));

        let date = new Date(year, month, day);

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

