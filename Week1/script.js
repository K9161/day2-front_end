/*


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
/*
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

*/



/*
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
*/
//exm5

var arr=[60,100,10,15,85]
arr.sort(function(a,b)
{
    return b-a
})
console.log(arr)

var highDegree=arr.find(function(num)
{
    return num<=100
})
console.log(highDegree)

var fail= arr.filter(function(num2)

{
    return num2<60
})
console.log(fail)