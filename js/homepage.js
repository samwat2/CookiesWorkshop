$(function(){
	var trump = new Item(1, 'donald-trump-face.jpg', 'Post something on trumps Twitter', '$4650');
	var hillary = new Item(2, 'scary-face.jpg', 'Read Hillarys Emails', '$9999');
	var mom = new Item(3, 'heart-mom.jpg', 'Get your moms credit card information', '$99');
	
	var shopping_cart = new ShoppingCart();
	var store = new Store();
	
	shopping_cart.updateCount();

	store.addStoreItem(trump);
	store.addStoreItem(hillary);
	store.addStoreItem(mom);
	store.postStoreItems();

	var add_button = $('.add-button');
		add_button.on('click', function(){
			console.log($(this).parent().parent().data('id'));
			let item = store.getItemById($(this).parent().parent().data('id'));
			console.log(item);
			shopping_cart.addToCart(item);
			shopping_cart.updateCount();
	});
});