//f=35.74+0.6215t-35.75s0.16+0.4275ts0.16


var f; 
var temperature=parseInt(document.getElementById("temperature").innerText);
var speed=parseInt(document.getElementById("windspeed").innerText);
//speed=2;
///temperature=51;
const spower=0.16;
const farenh=35.74;
const tempsped=0.4275;
// console.log(temperature);
// console.log(speed);



//Input requirements: "Wind Chill Temperature is officially defined for temperatures
// at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph).

if(temperature <= 50 && speed >= 3){
  //f=35.74+0.6215t-35.75s0.16+0.4275ts0.16

  f= (farenh+(spower*temperature))-(farenh*Math.pow(speed,spower))+tempsped*temperature*Math.pow(speed,spower);
  console.log(f);
document.getElementById("windF").innerHTML = f.toFixed(2) + " &#8457;";

} else {
   document.getElementById("windF").innerText = "N/A" 

}
