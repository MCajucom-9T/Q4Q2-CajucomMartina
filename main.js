function Grades() {
	var sci = parseInt(document.getElementById("sci").value);
	var math = parseInt(document.getElementById("math").value);
	var eng = parseInt(document.getElementById("eng").value);
	let score = Math.round((sci + math + eng) / 3)

	if (score > 93) {
		alert(score + ' Your grade is excellent.');
	} 
	else if (score >= 87 && score < 94) {
		alert(score + ' Your grade is above satisfactory.');
	} 
	else if (score >= 80 && score < 87) {
		alert(score + ' Your grade is satisfactory.');
	} 
	else if (score >= 75 && score < 80) {
		alert(score + ' Your grade needs improvement.');
	} 
	else {
		alert(score + ' Your grade is poor.');
	}
}