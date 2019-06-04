$("#total").text("$" + localStorage.getItem("total"));

var paymentMethod
function listQ(){
    paymentMethod = this.value;
    if (paymentMethod == "0") {
    	document.getElementById("card-info").style.opacity = "0.4"
    	$("#card-info :input").attr("disabled", true);
    } else {
    	document.getElementById("card-info").style.opacity = "1.0"
    	$("#card-info :input").attr("disabled", false);
    }
}
document.getElementById("payment").onchange = listQ;