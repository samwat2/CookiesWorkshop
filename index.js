
// cart function

class Store{
	constructor(){
		this.all_items = [];
	}
	addStoreItem(item){
		this.all_items.push(item);
	}
	postStoreItems(){
		for (var i = 0; i < this.all_items.length; i++) {
			this.all_items[i];
			$('#list-items').append('<div class="listing"  data-id="' + this.all_items[i].id + '"><img src="images/' + this.all_items[i].img +'" class="item-image"><div class"item-text">' + this.all_items[i].title + '</div><div class="item-price">' + this.all_items[i].price + '</div><div class="add-button"><button>ADD TO CART</button></div>');
		}
	}
	getItemById(i){
		return this.all_items.filter(items => items.id === i);
	}
}

class ShoppingCart{
	constructor(){
		this.added_items = [];
	}
	addToCart(new_item){
		this.added_items.push(new_item);
		Cookies.set('cart-items', JSON.stringify(this.added_items));
		var cart_objects = JSON.parse(Cookies.get('cart-items'));
		for (var i = 0; i < cart_objects.length; i++) {
			cart_objects[i];
			$('').append();
			}
		}
	updateCount(){
		if (Cookies.get('cart-items') === undefined) {
			Cookies.set('cart-items', '[]');
		}
		var cart_array = JSON.parse(Cookies.get('cart-items'));
		$('#item-count').html(cart_array.length);
		if (cart_array.length > 9) {
			$('#item-count').css('font-size', '12px');
			$('#item-count').css('top', '5px');
			$('#item-count').css('right', '-6px');
		}
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
