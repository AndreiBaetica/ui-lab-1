food = {"Spaghetti": 45.23, "Meat": 99};

btn = "<td><a data-toggle='modal' data-target='#myModal' class='remove-btn'>Remove</a></td>"

name = ""
row = null;

for (const [key, value] of Object.entries(food)) {
	console.log(key);
	if(localStorage.getItem(key) > 0){
		$("table").append("<tr class='order-item'><td class='item-name'>" + key +  
			"</td><td class='item-price'>$" + value +  "</td><td class=item-qnty>" +  localStorage.getItem(key) + "</td>" + btn + "</tr>");
	}
}

subtotal = 0;
for(const [key, value] of Object.entries(food)){
	subtotal += parseInt(localStorage.getItem(key))* value;
}
subtotal = Math.round(subtotal * 100) / 100;
$("#subtotal").text("$" + subtotal);

tax = Math.round((subtotal * 0.2) * 100) / 100;
$("#tax").text("$" + tax);

total = subtotal + tax;
localStorage.setItem("total", total);
$("#total").text("$" + total);


$(".remove-btn").click(function(){
	
		row = $(this).closest("tr");
		console.log(row);
		name = row.find(".item-name")[0].innerText;
		row = $(this).closest("tr");
		localStorage.setItem(name, 0);
	
})

$(".checkout-btn").click(function(){
	window.location = "Checkout.html"
})

$(".remove-btn-confirm").click(function(){
	row.remove();
	localStorage.setItem(name, 0);
	$('#myModal').modal('toggle');
});
