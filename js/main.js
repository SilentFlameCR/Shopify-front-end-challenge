function validateForm() {
	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var email = document.getElementById("email");
	var span = document.getElementById("error");
	var dropdown = document.getElementById("career");
	var dropdown2 = document.getElementById("career2");
	
	if(regex.test(email.value) == false){
		

		if(span.style.display = "none"){
			span.style.display = "block";
		}
		return false;
	} else {
		console.log("Email: " + email.value);
		console.log("Interested in: " + dropdown.value + dropdown2.value);
		return true;
	}
}