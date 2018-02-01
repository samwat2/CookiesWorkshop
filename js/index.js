
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
			$('#list-items').append('<div class="listing"  data-id="' + this.all_items[i].id + '"><img src="images/' + this.all_items[i].img +'" class="item-image"><div class="item-text">' + this.all_items[i].title + '</div><div class="item-price">' + this.all_items[i].price + '</div><div><button class="add-button">ADD TO CART</button></div>');
		}
	}
	getItemById(id){
		return this.all_items.filter(item => item.id === id);
	}
}

class ShoppingCart{
	constructor(){
		//console.log(typeof Cookies.get('cart-items'));
		// this.added_items = [];
		// Cookies.set('cart-items', JSON.stringify(this.added_items));
		//console.log(this.added_items);
		//console.log(this.added_items = JSON.stringify(Cookies.get(this.added_items))); //|| [];
		//this.added_items = JSON.parse(Cookies.get('cart-items')); //|| [];
		// console.log(JSON.stringify(Cookies.get('cart-items')))
		// console.log(JSON.parse(Cookies.get('cart-items')))
		var cart_items = Cookies.get('cart-items');
		this.added_items = cart_items ? JSON.parse(cart_items) : [];
		// JSON.stringify(Cookies.get('cart-items'))
		// if (JSON.parse(Cookies.get('cart-items')) === undefined){
		// this.added_items = [];
		// }else{
		// 	this.added_items = JSON.stringify(Cookies.get('cart-items'))
		// 	this.added_items = JSON.parse(Cookies.get('cart-items'));
		// }
	}
	// getItemById(id){
		// return this.added_items.filter(item => item.id === id);
	// }
	addToCart(new_item){
		this.added_items.push(new_item);
		Cookies.set('cart-items', JSON.stringify(this.added_items));
		//var cart_objects = JSON.parse(Cookies.get('cart-items'));
		//console.log(JSON.parse(Cookies.get('cart-items')));
		}
	addToAccount(){
		var account_objects = JSON.parse(Cookies.get('cart-items'));
		console.log(account_objects)
		for (var i = 0; i < account_objects.length; i++) {
			console.log(account_objects[i][0])
			$('.selected-items').append('<div data-id="' + account_objects[i][0].id + '"><tr><th>Action: </th><th>' + account_objects[i][0].title + '</th><th>-------Price: ' + account_objects[i][0].price + '</th></tr></div>'); //<button class="remove-item"></button>

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
		//console.log(this.added_items.filter(item => item !== remove_item));
		//this.added_items = this.added_items.filter(kept => kept !== remove_item);
		this.added_items.splice(1, 1);
		Cookies.set('cart-items', JSON.stringify(this.added_items));
	}
	removeAllItems(){
		Cookies.set('cart-items', '[]'); //, { path: '/' }
		$('.selected-items').css('display', 'none'); //<button class="remove-item"></button>

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