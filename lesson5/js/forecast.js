var d = new Date();
var weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

var n = d.getDay();
//var n=3;


var forecastlabel=document.getElementsByClassName('forecastlabel');



for(var x=0; x<5; x++){
    if( n <= 6){
        console.log(weekday[n])
        forecastlabel[x].innerHTML=weekday[n];
    n++;
    }else{
        n=0;
        console.log(weekday[n])
        forecastlabel[x].innerHTML=weekday[n];
        n++;
    }

}