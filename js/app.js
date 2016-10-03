function focusFunc(elm) {

	var element = document.getElementById(elm);
	var lbl = element.getElementsByTagName("p");
	lbl[0].style.fontSize = "1rem";
	var input = element.getElementsByTagName("input");
	input[0].style.height = "100%";
	input[0].style.paddingTop = "5px";
	input[0].style.paddingBottom = "10px";
	input[0].focus();

	input[0].style.borderBottomColor = "#ffb31a";
	var labelColor = element.getElementsByTagName("label");
	labelColor[0].style.color = "#ffb31a";
}

//function focusOut(input) {
function focusOut(element) {

	var elmID = document.getElementById(element);
	var input = elmID.getElementsByTagName("input");
	var label = elmID.getElementsByTagName("label");
	input[0].style.removeProperty('border-bottom-color');
	label[0].style.removeProperty('color');

	if(input[0].value === ""){

		input[0].style.height = "0px";
		var lbl = elmID.getElementsByTagName("p");
		lbl[0].style.removeProperty('font-size');
		input[0].style.removeProperty('padding-top');
		input[0].style.removeProperty('padding-bottom');
	}


}