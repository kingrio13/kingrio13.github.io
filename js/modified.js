let nLastModify = new Date(document.lastModified);

//footer date in format Wednesday, 24 July 2020 (including comma), uses JS

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var nLastModif= days[nLastModify.getDay()] + ", "+ nLastModify.getDay() + " " + months[nLastModify.getMonth()] +" "+ nLastModify.getFullYear();

document.getElementById('lastupdated').innerHTML="Last Updated: "+ nLastModif;