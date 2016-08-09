Array.prototype.last = function() {
	return this[this.length-1];
}

$(document).ready(function(){
	var pathname = location.pathname.split('/').last()
	var allNavbarNav = $("#navbar > ul > li > a");
	for (var i = 0; i < allNavbarNav.length; i++) {
		var nav = allNavbarNav[i];
		if ($(nav).attr('href') == pathname) {
			$(nav).parent().addClass('active');
			break;
		}
	}
});


