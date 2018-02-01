$(function(){
	var trump = new Item(1, 'donald-trump-face.jpg', 'Post something on trumps Twitter', '$4650');
	var hillary = new Item(2, 'scary-face.jpg', 'Read Hillarys Emails', '$9999');
	var mom = new Item(3, 'heart-mom.jpg', 'Get your moms credit card information', '$99');
	var store = new Store();
	var shopping_cart = new ShoppingCart();
	
	shopping_cart.updateCount();

	store.addStoreItem(trump);
	store.addStoreItem(hillary);
	store.addStoreItem(mom);
	store.postStoreItems();
});
