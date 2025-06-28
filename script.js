	
function calculate() {
		
// get input values
let D = parseFloat(document.getElementById("D").value);
let P = parseFloat(document.getElementById("P").value);
let z = parseFloat(document.getElementById("z").value);
let u = parseFloat(document.getElementById("u").value);
let un = parseFloat(document.getElementById("un").value);
let alpha = parseFloat(document.getElementById("alpha").value);
let s = parseFloat(document.getElementById("s").value);
let D_0 = parseFloat(document.getElementById("D_0").value);
let Re = parseFloat(document.getElementById("Re").value);
let Re_ratio = parseFloat(document.getElementById("Re_ratio").value);
		
//calculate values
let H = P * Math.sqrt(3)/2;
let d_1 = D - 1.0825*P;
let d_2 = D - 0.6495*P;
let d_3 = d_1 - H/6;		
let phi = Math.atan((z*P)/(d_2 * Math.PI));
let mi_n = u/Math.cos(0.5*alpha*3.141592/180);
let rn = Math.atan(mi_n); 
let ru = (1/3)*(s**3 - D_0**3)/(s**2 - D_0**2);
let As = (Math.PI/4)*((d_2 + d_3)/2)**2;
let F = Re * Re_ratio * As;
let Tn = 0.001*F*(d_2/2)*Math.tan(phi+rn);
let Tu = 0.001*F*ru*un;
let T = Tn + Tu;
let r_T = 100*Tu/Tn;
		
// write output: rounded values
document.getElementById("d_1").value = d_1.toFixed(4);
document.getElementById("d_2").value = d_2.toFixed(4);
document.getElementById("d_3").value = d_3.toFixed(4);
document.getElementById("phi").value = phi.toFixed(4);
document.getElementById("rn").value = rn.toFixed(4);
document.getElementById("ru").value = ru.toFixed(4);
document.getElementById("As").value = As.toFixed(4);
document.getElementById("F").value = F.toFixed(4);
document.getElementById("Tn").value = Tn.toFixed(4);
document.getElementById("Tu").value = Tu.toFixed(4);
document.getElementById("T").value = T.toFixed(4);
document.getElementById("r_T").value = r_T.toFixed(2);
		
alert("Calculation finished.");
		
}
		
function clear_values() {
		
// clear input values
document.getElementById("D").value = "0.0";
document.getElementById("P").value = "0.0";
document.getElementById("z").value = "0.0";
document.getElementById("s").value = "0.0";
document.getElementById("D_0").value = "0.0";
document.getElementById("alpha").value = "0.0";
document.getElementById("u").value = "0.0";
document.getElementById("un").value = "0.0";
document.getElementById("Re").value = "0.0";
document.getElementById("Re_ratio").value = "0.0";
		
// clear output values
document.getElementById("d_1").value = "0.0";
document.getElementById("d_2").value = "0.0";
document.getElementById("d_3").value = "0.0";
document.getElementById("phi").value = "0.0";
document.getElementById("rn").value = "0.0";
document.getElementById("ru").value = "0.0";
document.getElementById("As").value = "0.0";
document.getElementById("F").value = "0.0";
document.getElementById("Tn").value = "0.0";
document.getElementById("Tu").value = "0.0";
document.getElementById("T").value = "0.0";
document.getElementById("r_T").value = "0.00";

// clear notes fields
document.getElementById("Note_1").value = "";
document.getElementById("Note_2").value = "";
document.getElementById("Note_3").value = "";
document.getElementById("Note_4").value = "";
document.getElementById("Note_5").value = "";
document.getElementById("Note_6").value = "";
document.getElementById("Note_7").value = "";
			
alert("Values cleared  from input and result fields.");
		
}
	
function load_example() {
		
// load input values
document.getElementById("D").value = "20.000";
document.getElementById("P").value = "2.500";
document.getElementById("z").value = "1.0";
document.getElementById("s").value = "30.0";
document.getElementById("D_0").value = "22.000";
document.getElementById("alpha").value = "60.00";
document.getElementById("u").value = "0.11";
document.getElementById("un").value = "0.08";
document.getElementById("Re").value = "724.0";
document.getElementById("Re_ratio").value = "0.75";
		
alert("Example loaded.");
		
}

function OpenAndClose() {
window.open('https://jovan-filipovic.github.io/ENCOS/home.html', '_blank'); // open in new tab
window.open('', '_self'); // switch to same tab
window.close(); // attempt to close current tab
}
   
<!-- JavaScript for dynamic date and time -->
function updateDateTime() {
const datetimeElement = document.getElementById("datetime");
const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
datetimeElement.textContent = now.toLocaleString("en-US", options);
}

// Update the date and time every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial update
