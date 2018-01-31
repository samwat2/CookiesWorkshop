
// cart function
// var all_items = [[,'Post something on trumps Twitter','$4650']];
// var added_items = [];


function getCount(){
	Cookies.set('item-count', count);
}
function updateCount(){
	var items = Cookies.get('item-count');
	$('#item-count').html(items);
}


$(function(){
	$('#cart').on('mouseover', function(){
		$('#cart').css("background", "lightgrey");
	});
	$('#cart').on('mouseout', function(){
		$('#cart').css("background", "none");
	});
	$('#cart').on('click', function(){
		getCount();
		updateCount();
	});
});
