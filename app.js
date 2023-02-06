//assignment JS
//Alerts
//alert("welcome !M.Abdullah shahid")
//Q2
//alert("Error! please enter a valid password")
//Q3
//alert("welcome ! \n M.Abdullah shahid")
//Q4
//alert("welcome !M.Abdullah shahid")
//alert("welcome !shahid")
//alert("welcome !M")
//alert("welcome !umer")
//Q5
//alert("welcome !M.Abdullah shahid")

//---------------------
//VARIABLES	FOR	STRINGS
//Q1
//var username;
//Q2
//var myname="M.Abdullah shahid";
//Q3
//var message='Hello world'
//alert(message)
// //Q4
// var username='M.Abdullah shahid';
// var fathername='M.shahid';
// var age= '23'
// var couresename='Web and Mobile App'
// alert(username)
// alert(fathername)
// alert(age)
// alert(couresename)
//Q5
// var name1='Pizza \npizz \npiz \npi \npi \np';
// alert(name1)
//Q6
// var number_of_children='4'
// var partners_Name='ABC'
// var geographic_location='Pakistan'
// var jobtitle= 'Software engineer'
// alert('You will be '+jobtitle +  ' in ' + geographic_location + " and married to" + partners_Name + " with" + number_of_children)
// //Q7
// var email='abdullahshahid15995@gmail.com'
// alert('My email address is '+email)

//---------------------
//VARIABLES	FOR NUMBERS
//var age=23
//Q1
//alert('I am '+age)
//Q2
// Noofvisits=2
// alert('You have visited this site  '+Noofvisits+'times')
//Q3
// var  birthYear=2000
// document.write("My birtgh year is"+birthYear )
// document.write("The data type of variable"+typeof(birthYear))
//Q4
// var visitorsname='M.Abdullah shahid'
// var Producttitle='watches'
// var Quantity=4
// document.write(visitorsname+' ordered'+ Quantity+Producttitle +' on XYZ clothing store')

//---------------------------
//VariableNames_LegalAndIllegal
//Q1
//var a,b,c
//Q2
//legal
// var username
// var password
// var length
// var subject
// var addd
// //illegal
// var function     
// var name
// var 1
// var 1name
// var date of birth
//Q3
//var rules='Rules for naming JS variables'
// var contain='variables names can only contain my1stvariable'
// var begin ='variables must begin with a name, _name, $name'
// var name1 ="variables names are case sensitive"
// var func="variables names should not be case sensitive"
// document.write(rules, '<br>')
// document.write(contain,'<br>')
// document.write(begin,'<br>')
// document.write(name1,"<br")
// document.write(func,"<br")


//--------Mth Expressions------------
//Q1
// var input1=+prompt("Enter first number")
// var input2=+prompt("Enter second number")

// result=input1 + input2
// //document.write(result)
// alert("sum of"+ input + "and" +input2 + "is" +result)
//Q2
// var input1=+prompt("Enter first number")
// var input2=+prompt("Enter second number")
// // result=input1 - input2
// // alert("Subtraction of"+ input1 + "and" +input2 + "is" +result)


// // result=input1 * input2
// // alert("Multiplication of"+ input1 + "and" +input2 + "is" +result)

// // result=input1 / input2
// // alert("Divsion"+ input1 + "and" +input2 + "is" +result)

// result=input1 % input2
// alert("Nodulus of"+ input1 + "and" +input2 + "is" +result)
//Q3
// var input
// document.write("value after variable declaration is undefined<br>")
// var input=4
// document.write("Initial value is ", input+'<br>')
// var input=4
// var input1=input++
// document.write("value after increment is ", input+'<br>')
// var input=5+7
// document.write("value after addition is ", input+'<br>')
// var input2=input--
// document.write("value after decrement is ", input+'<br>')
// var input3=input2/3
// document.write("Remainder is ", input3+'<br>')
//Q4
// var price=600
// var totalcost=price*5
// document.write("Total cost to buy 5ticket to a movie ",totalcost)
//Q5
// var table=prompt("Enter any number")

// for(i=1;i<11;i++){
//     document.write(table+"x"+i+"="+table*i+'<br>')
// }
//Q6
// var Celsius=22
// // var far=22
// // var Celsius=(far-32)*5/9
// var far=(Celsius*9/5)+32
// document.write("22.C is ",far+"<br>")
// var far=22
// var Celsius=(far-32)*5/9
// document.write("68.F is ",Celsius)
//Q8
// var marksobtained=prompt("Enter your total marks obtained")
// var marks=prompt("Enter your total marks")

// var result=(marksobtained/marks)*100
// document.write(result)
//Q9
// var USDollars=10
// var SaudiRiyals=25
// var Pakisatnirupees= 104*10 + 25*28
// document.write("Total currency in PKR"+Pakisatnirupees)
//Q12
// var radius =12
// var pi=3.142
// var circum=2*pi*radius
// var area=pi*radius*radius
// document.write("circumference",circum+'<br>')
// //var area=pi*radius*radius
// document.write("Area of a circle is ",area)
//Q13
// var increment=prompt("Enetr any number")
// //var pre=++increment
// document.write("Result ",increment+'<br>')
// document.write("-----------------<br>")
// var pre=++increment
// document.write("value of is "+increment+'<br>')
// document.write("Result ",pre+'<br>')

// var post=increment++
// document.write("value of is "+increment+'<br>')
// document.write("Result ",post)

//User input &conditional Statements------------
//Q1
// var name1=prompt("Please enter your name")
// alert("Hi, "+name1)
//Q2
// var value=prompt("Enter a value to print its table","5")
// for(i=1;i<11;i++){
//     document.write(value+"x"+i+"="+value*i+'<br>')
// }
//Q3
// var value=prompt("Enter the name of the city")

// if(value=="karachi"){
//     alert("Welcome to city of lights")
// }
// else{
//     alert("City "+value)
// }
//Q5
// var signal=prompt("Enter the value of color")
// if(signal=='red'){
//     alert("vehicles must stop")
// }
// if(signal=='yellow'){
//     alert("vehicles should get ready to move")
// }
// if(signal=="green"){
//     alert("vehicles can move now")
// }
//Q8
// var a=4
// if(++a==5){
//     alert("given condition for a is true")
// }

// var b=82
// if(b++==83){

//     alert("given condition for b is true")

// }
//Q9
var totalmarks=prompt("Enter the total marks")
var marksobtained=+prompt("Enter the marks in english")
var marksobtained1=+prompt("Enter the marks in urdu")
var marksobtained2=+prompt("Enter the marks in maths")
var totalobtained = marksobtained+marksobtained1+marksobtained2
percentage = (totalobtained/totalmarks)*100

document.write("Total Marks",totalmarks+"<br>")
document.write("Marks obtained",totalobtained+'<br>')

document.write("Percentage",percentage+'<br>')
if(percentage>=80){
    document.write("Grade: A"+'<br>')
    document.write("Remarks: Excelent"+'<br>')      

}
if(percentage>=70){
    document.write("Grade: A"+'<br>')
    document.write("Remarks: Good"+'<br>')      

}
if(percentage>=60){
    document.write("Grade: B"+'<br>')
    document.write("Remarks: You need to improve"+'<br>')      

}
else{
    document.write("Grade: Fail"+'<br>')
    document.write("Remarks: Sorry"+'<br>')      

}
