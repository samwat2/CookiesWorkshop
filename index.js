
// cart function

class Store{
	constructor(){
		this.all_items = []
	}
	addStoreItem(item){
		this.all_items.push(item)
	}
	postStoreItems(){
		for (var i = 0; i < this.all_items.length; i++) {
			this.all_items[i];
			$('#list-items').append('<div class="listing"  data-id="' + this.all_items[i].id + '"><img src="images/' + this.all_items[i].img +'" class="item-image"><div class"item-text">' + this.all_items[i].title + '</div><div class="item-price">' + this.all_items[i].price + '</div><div class="add-button"></div>');
		}
	}
}

class ShoppingCart{
	constructor(){
		this.added_items = [];
	}
	addToCart(new_item){
		this.added_items.push(new_item);
		Cookie.set('cart-items', JSON.stringify(this.added_items));
	}
	removeCartItem(remove_item){
		this.added_items = this.added_items.filter(kept => kept !== remove_item);
	}
}

class Item{
	constructor(id, img, title, price){
		this.id = id;
		this.img = img;
		this.title = title;
		this.price = price;
	}
}


// function updateCount(){
// 	var items = Cookies.get('item-count');
// 	$('#item-count').html(items);
// }
// function postItems(){
// 	for (var i = 0; i < all_items.length; i++) {
// 		all_items[i];
// 		$('#list-items').append('<div class="listing"  data-id="' + all_items[i][3] + '"><img src="images/' + all_items[i][0] +'" class="item-image"><div class"item-text">' + all_items[i][1] + '</div><div class="item-price">' + all_items[i][2] + '</div><div class="add-button"></div>');
// 	}
// }
// function addToCart(new_item){
// 	var already_added = added_items.filter((e) => e === new_item);

// 	// .map(e => e[0])
// 	// .filter((e, i, a) => a.indexOf(e) === i);
// 	if (already_added[0] !== new_item) {
// 		added_items.push(new_item);
// 	}
// }
// function removeCartItem(remove_item){
// 	added_items = added_items.filter(kept => kept !== remove_item);
// }


$(function(){
	var store = new Store();
	var shopping_cart = new ShoppingCart();

	var trump = new Item(1, 'img', 'Post something on trumps Twitter', '$4650');
	var hillary = new Item(2, 'img', 'Read Hillarys Emails', '$9999');
	var mom = new Item(3, 'img', 'Get your moms credit card information', '$99');

	store.addStoreItem(trump);
	store.addStoreItem(hillary);
	store.addStoreItem(mom);
	store.postStoreItems();

	var add_button = $('.add-button');
	add_button.on('click', function(){
		shopping_cart.addToCart();
	});
	// postItems();

	// var cart = $('#cart');
	// cart.on('mouseover', function(){
	// 	cart.css("background", "lightgrey");
	// });

	// cart.on('mouseout', function(){
	// 	cart.css("background", "none");
	// });

	// cart.on('click', function(){
	// 	getCount();
	// 	updateCount();
	// });
	
	// var listing = $('.listing');
	// add_button.on('click', function(){

	// 	addToCart(listing.data('name'));
	// 	getCount();
	// 	updateCount();
	// });
});
