<script>
window.onload = loadiframe();
function loadiframe(){
iframebuster();
}

function iframebuster(){
if (window.frameElement) {
window.parent.document.getElementById(parent.window.frames[window.name].name).style.zIndex = "9999999"; // can be adjust as per the need
	 window.parent.document.getElementById(parent.window.frames[window.name].name).style.position = "fixed";// can be adjust as per the need
	window.parent.document.getElementById(parent.window.frames[window.name].name).style.bottom = "-45px";// can be adjust as per the need
	 window.parent.document.getElementById(parent.window.frames[window.name].name).style.left = "50%";// can be adjust as per the need
        window.parent.document.getElementById(parent.window.frames[window.name].name).style.height= "90px";// can be adjust as per the need
	 window.parent.document.getElementById(parent.window.frames[window.name].name).style.width= "990px";// can be adjust as per the need
	window.parent.document.getElementById(parent.window.frames[window.name].name).style.marginRight = "-50%";// can be adjust as per the need
	window.parent.document.getElementById(parent.window.frames[window.name].name).style.transform = "translate(-50%, -50%)";// can be adjust as per the need
	window.parent.document.getElementById(parent.window.frames[window.name].name).style.overflow = "overlay";// can be adjust as per the need
}
else{
}
}
</script>