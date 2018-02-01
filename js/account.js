$(function(){
	var trump = new Item(1, 'img', 'Post something on trumps Twitter', '$4650');
	var hillary = new Item(2, 'img', 'Read Hillarys Emails', '$9999');
	var mom = new Item(3, 'img', 'Get your moms credit card information', '$99');
	var store = new Store();
	var shopping_cart = new ShoppingCart();
	
	shopping_cart.updateCount();

	shopping_cart.addToAccount();
	remove_button = $('.remove-item')
	remove_button.on('click', function(){
		console.log($(this).parent())
		//let item = shopping_cart.getItemById($(this).parent());//.data('id')
		//console.log(item)
		shopping_cart.removeCartItem($(this).parent());
		shopping_cart.updateCount();
		shopping_cart.addToAccount();
	});
	remove_all = $('.remove-button')
	remove_all.on('click', function(){
		shopping_cart.removeAllItems();
		shopping_cart.updateCount();
		shopping_cart.addToAccount();
		alert('GET OUT')
	});

});