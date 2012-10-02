// JavaScript Document

var calcHeight = function() {
var headerDimensions = $('#header-bar').height();
$('#preview-frame').height($(window).height() - headerDimensions);
}

$(document).ready(function() {
        calcHeight();
 });
$(window).resize(function() {
	
	calcHeight();
}).load(function() {
	
	calcHeight();
});

