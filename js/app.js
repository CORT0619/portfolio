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

document.getElementById('comments').onkeypress = function(e){

	var event = e || window.event;

	if (event.keyCode == '13'){
		console.log("enter was pressed");
		this.style.paddingBottom = "48px";
		//return false;
	}
}

function commentFocus(elm) {

	var element = document.getElementById(elm);
	var lbl = element.getElementsByTagName("p");
	lbl[0].style.fontSize = "1rem";
	var textarea = element.getElementsByTagName("textarea");
	// textarea[0].style.height = "50%";
	textarea[0].style.paddingTop = "5px";
	textarea[0].style.paddingBottom = "30px";
	textarea[0].focus();

	textarea[0].style.borderBottomColor = "#ffb31a";
	var labelColor = element.getElementsByTagName("label");
	labelColor[0].style.color = "#ffb31a";
}


function commentFocusOut(element) {

	var elmID = document.getElementById(element);
	var textarea = elmID.getElementsByTagName("textarea");
	var label = elmID.getElementsByTagName("label");
	textarea[0].style.removeProperty('border-bottom-color');
	label[0].style.removeProperty('color');

	if(textarea[0].value === ""){

		textarea[0].style.height = "0px";
		var lbl = elmID.getElementsByTagName("p");
		lbl[0].style.removeProperty('font-size');
		textarea[0].style.removeProperty('padding-top');
		textarea[0].style.removeProperty('padding-bottom');
	}
}

function sendForm() {



	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;

	var name = fname + " " + lname;

	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;

}