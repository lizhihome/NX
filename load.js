
    // Function to get the last part (name) of the web address
    function getLastPartOfWebAddress() {
        var fullURL = window.location.href;
        var urlParts = fullURL.split('/');
        var lastPart = urlParts[urlParts.length - 1];
        return lastPart;
    }

	function reload_html_lan() {
	   var lan=localStorage.getItem("language");
	   var languageSelect = document.getElementById("languageSelect");
	   //if (lan==="en") languageSelect.selectedIndex = 0;
	  // if (lan==="zh") languageSelect.selectedIndex = 1;
	   var url=getLastPartOfWebAddress();
	   if (url==="" || url==="index") url="index.html";
	   if (lan==="") lan="en";   // default as english

	   if (lan==="zh" && url==="index.html"){
	      window.location.href = "https://lizhihome.github.io/NX/index_zh.html/";
//	      window.location.href = "file:///C:/Users/lizhi/Documents/GitHub/NX_Mold_Wizard/index_zh.html";
		  languageSelect.selectedIndex = 1;
	   }
	   if ( lan==="en" && url==="index_zh.html"){
	      window.location.href = "https://lizhihome.github.io/NX/index.html";
//	      window.location.href = "file:///C:/Users/lizhi/Documents/GitHub/NX_Mold_Wizard/index.html";
		  languageSelect.selectedIndex = 0;
	   }	
	}

    // Automatically start the URL when the page loads
    window.onload = function() {
       // window.location.href = "http://129.146.69.22/";
         // reload_html_lan();
    }
	
	function setlanguage(){
		var languageSelect = document.getElementById("languageSelect");
		var lan = languageSelect.value;	
		localStorage.setItem("language", lan);
		reload_html_lan();
	}
	
	