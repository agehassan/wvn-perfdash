function hideSPDLink() {
	var modules = document.getElementsByClassName("moduleTitle");
	// remove tools link if present
	for (var i = 0; i < modules.length; i++) if(modules[i].innerHTML == "Tools") var tools = modules[i];
	if(tools) {
		tools = tools.parentElement.parentElement.getElementsByClassName("portletList");
		tools[0].childElements().forEach(
			function (item) { if(item.innerHTML.includes("wvn-perfdash")) item.remove() }
		)
	}
	// remove module if present
	for (var i = 0; i < modules.length; i++) if(modules[i].innerHTML == "Student Performance Dashboard") var spd = modules[i];
	if(spd) {
		spd = spd.parentElement.parentElement;
		spd.remove();
	}
}

Event.observe(document,"dom:loaded", function() {
	if(document.getElementsByClassName('active')[0].innerHTML.includes('My Blackboard')) {
		checkSPDAccess(function(obj) {
			if(obj.responseText == "0") {
			    hideSPDLink();
			}
		});
	}
});