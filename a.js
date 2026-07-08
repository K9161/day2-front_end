var x=window.prompt("enter your email")
console.log(x);
function validEmail()
{
    if(x.includes("@")) {

console.log("Valid Email");

}
else{
    console.log("Invalid Email");
    
}
}
validEmail()


// var x= window.prompt ("enter your full name ")
// var y= window.prompt ("enter your email ")
// var emailRegex = ("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$") 
// if (x.match(nameRegex)&&y.match(emailRegex))

//     {
//         console.log("valid name & email")
//         console.log(x)
//          console.log(y)
//     }


// else{
//     console.log("again")
// }


// var x= window.prompt ("enter your full name ")
// var y= window.prompt ("enter your email ")
// var n= window.prompt ("enter the number of times you want to enter your name and email ")
// var emailRegex = ("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$") 
// var nameRegex = ("^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$")
//  if (x.match(nameRegex)&&y.match(emailRegex))

//    {
//          console.log("valid name & email")
//         console.log(x)
//           console.log(y)
// }
 
//     else if (!x.match(nameRegex))
//     for (var i=0;i<n;i++)
//     {
//         var x= window.prompt ("enter your full name ")
//         var y= window.prompt ("enter your email ")
//     }

// else 
// {
//     console.log("try again")
// }
// var nameRegex = ("^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$")

// do {

     
//     var x= window.prompt ("enter your full name ")

// } while (!x.match(nameRegex));

// do {

     
//     var x= window.prompt ("enter your ")

// } while (!x.match(emailRegex));



// var validated = function name(params) {
    
// }

// validated()

// // diff regular function exp function  ----- Hoisting 

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









