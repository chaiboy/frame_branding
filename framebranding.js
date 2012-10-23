// JavaScript Document

function pagePreview(actualurl) {
var framewin = window.open("","brandingframe");

framewin.document.writeln('<!DOCTYPE html>'
 +'<html>'
 +'<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
 +'<title>Preview</title>'
 +'<link href="http://afgdev.com/css/pagepreview.css" rel="stylesheet" type="text/css" />'
 +'</head>'
 +'<body>'
+'<div class="header" id="header-bar"><p> AFG DEV <a href="#" onclick="window.close();">Close This Window </a>'
+'<a href="' + actualurl + '" target="_top">Remove Header</a></p></div>'
+'<iframe id="preview-frame" src="' + actualurl + '" frameborder="0" scrolling="auto" ></iframe>'
+"</body></html>"
)
framewin.document.close();
void(0);



	
	
	
	
