var birthdate=document.getElementById('date');
var calculate=document.getElementById('calculate-btn');
var result=document.getElementById('result');

calculate.addEventListener('click',calculateAge);
function calculateAge(){
    var date=new Date(birthdate.value);
    var today=new Date();
    var ageInMilliseconds=today-date;
    var ageInYears=Math.floor(ageInMilliseconds/(1000*60*60*24*365.25));
    if(ageInYears>=0){
        result.textContent=`you are ${ageInYears} years old`;
    }
    else{
        result.textContent="invalid input";
    }
  }