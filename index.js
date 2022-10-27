var Amount,year,intrest_rate;

function rangeamount() {
   Amount=document.getElementById("rangeamount").value;
    document.getElementById("iamount").innerHTML=`${Amount}`;
    
}
 function rangeyear() {
    year=document.getElementById("rangeyear").value;
    document.getElementById("iyear").innerHTML=`${year}`;
 }

 function rangepercent() {
    intrest_rate=document.getElementById("rangeper").value;
    document.getElementById("irate").innerHTML=`${intrest_rate}`;
 }
 

 function calculaterate() {
    var p = parseFloat(Amount)
    var r = parseInt(intrest_rate)/12/100;
    var n = parseFloat(year) *12;
    var EMI =  p * r / (1- (Math.pow(1/(1 + r), n)));
    var result= document.getElementById("result");
    result.innerHTML=`Your EMI is ${Math.round(EMI)} ₹ per month`;
    
 }