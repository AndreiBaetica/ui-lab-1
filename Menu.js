var order = new Map();

order.set("Spaghetti", 0);
order.set("Meat", 0);

name = "";
qantity = 0;

$(".add").click(function(){
	name = $(this).siblings("h3")[0].innerText;
});

$(".add-btn").on("click",function(){
	order.set(name, order.get(name) + 1);
	console.log(order);
	localStorage.setItem(name, order.get(name));
	$('#myModal').modal('toggle');
});