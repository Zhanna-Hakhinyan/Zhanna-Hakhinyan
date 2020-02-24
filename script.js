 const username25 = document.getElementById("username");
function grel(){
localStorage.setItem("user", username25.value); }
function click(){
	const us =localStorage.getItem("user");
	const username26 = document.getElementById("username1");
	if(username26.value !== us){
	alert("Please try again");
}else { alert("Welcome");}}
function clear_l(){
	localStorage.removeItem("user");
}
	
