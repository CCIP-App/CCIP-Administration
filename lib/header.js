Array.prototype.last = function() {
	return this[this.length-1];
}

$(document).ready(function() {
	var pathname = location.pathname.split('/').last().split('.html')[0];
	$('#nav_' + pathname).addClass('active');
});


const parameters = location.search.split('?').pop().split('&').map(p => {
	var ps = p.split('=');
	var o = {};
	o[ps.shift()] = ps.join('=');
	return o;
}).reduce((a, b) => {
	var o = a;
	for(var k in b) {
		o[k] = b[k];
	}
	return o;
});

const isMobile = {
	get iOS() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	},
	get Android() {
		return navigator.userAgent.match(/Android/i) ? true : false;
	},
};
