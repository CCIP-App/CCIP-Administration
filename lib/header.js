Array.prototype.last = function() {
	return this[this.length-1];
}

$(document).ready(function(){
	var pathname = location.pathname.match(/[^\/]+$/)[0].split('.html')[0];
	$('#nav_' + pathname).addClass('active');
	}
});
