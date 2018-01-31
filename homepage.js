$(function(){
var trump = new Item(1, 'img', 'Post something on trumps Twitter', '$4650');
var hillary = new Item(2, 'img', 'Read Hillarys Emails', '$9999');
var mom = new Item(3, 'img', 'Get your moms credit card information', '$99');
shopping_cart.updateCount();

var store = new Store();
var shopping_cart = new ShoppingCart();


store.addStoreItem(trump);
store.addStoreItem(hillary);
store.addStoreItem(mom);
store.postStoreItems();

var add_button = $('.add-button');
	add_button.on('click', function(){
		let item = store.getItemById($(this).parent().data('id'));
		console.log(item)
		shopping_cart.addToCart(item);
		shopping_cart.updateCount();
});
});