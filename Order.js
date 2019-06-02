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

$(".remove-btn").click(function(){
	
		row = $(this).closest("tr");
		console.log(row);
		name = row.find(".item-name")[0].innerText;
		row = $(this).closest("tr");
		localStorage.setItem(name, 0);
	
})

$(".checkout-btn").click(function(){
	total = 0;
	for(const [key, value] of Object.entries(food)){
		total += parseInt(localStorage.getItem(key))* value;
	}
	localStorage.setItem("total", total);
	window.location = "Checkout.html"
})

$(".remove-btn-confirm").click(function(){
	row.remove();
	localStorage.setItem(name, 0);
	$('#myModal').modal('toggle');
});
	
