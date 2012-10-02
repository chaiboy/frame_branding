// JavaScript Document
function pagePreview(actualurl) {
//brandingframe.close();
var framewin = window.open("","brandingframe");
framewin.document.writeln('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'
 +'<html xmlns="http://www.w3.org/1999/xhtml">'
 +'<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
 +'<title>Preview</title>'
 +'<link href="http://afgdev.com/css/pagepreview.css" rel="stylesheet" type="text/css" />'
 +'<script type="text/javascript" src="http://afgdev.com/js/jquery-1.3.2.js"></script>'
 +'<script type="text/javascript" src="http://afgdev.com/js/iframeFix.js"></script>'
 +'</head>'
 +'<body>'
+'<div class="header" id="header-bar"><p> AFG DEV <a href="#" onclick="window.close();">Close This Window </a>'
+'<a href="' + actualurl + '" target="_top">Remove Header</a></p></div>'
+'<iframe id="preview-frame" src="' + actualurl + '" frameborder="0" scrolling="auto" ></iframe>'
+"</body></html>"
)
framewin.document.close();
void(0);
}

$(document).ready(function() {
						   
						   
						   $("#wrapper").animate({
							  opacity: 0
							  },0).animate({
								opacity: 1
							  },1000);
	
	
	
	$("#wrapper").removeClass("hide").addClass("show");
	
	$("#nav a,#sidebar a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		
		$("#wrapper").animate({
								opacity: 0
							  },500, redirectPage);		
		
		
		
	});

	
	$(".post a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		pagePreview(linkLocation);

			
	});

		
	function redirectPage() {
window.location = linkLocation;

}

	} //functon end
); //ready end




function highlight(targetEl){
	$(targetEl).animate({backgroundColor: 'red'},500);
	$(targetEl).addClass("live");
}

function kickit(){
	  $("#wrapper").animate({
							  opacity: 0,
							  left:"1000px"
							  },0).animate({
								opacity: 1,
							  	left:"0px"
							  },1000);
	$("#wrapper").removeClass("hide").addClass("show");
	
	$("a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("#wrapper").animate({
								opacity: 0,
							  	left:"-1000px"
							  },1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	}
	
	
	
	
