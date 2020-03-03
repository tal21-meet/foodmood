function F(R) {
	var link=["file:///home/student/Desktop/HTML%20Lab1/iframe0.html"
	,"file:///home/student/Desktop/HTML%20Lab1/iframe1.html"
	,"file:///home/student/Desktop/HTML%20Lab1/iframe2.html"
	,"file:///home/student/Desktop/HTML%20Lab1/iframe3.html"
	,"file:///home/student/Desktop/HTML%20Lab1/iframe4.html"
	,"file:///home/student/Desktop/HTML%20Lab1/iframe5.html"
	,"file:///home/student/Desktop/HTML%20Lab1/iframe6.html"
	,"file:///home/student/Desktop/HTML%20Lab1/iframe7.html"
	,"file:///home/student/Desktop/HTML%20Lab1/iframe8.html"
	,"file:///home/student/Desktop/HTML%20Lab1/iframe9.html"]
	window.location.href = link[R];
}
function G(R) {
	var link=["https://www.twopurplefigs.com/how-to-cook-mussels-with-garlic-and-lemon-sauce/",
	"https://www.fifteenspatulas.com/homemade-sushi/"]
    document.getElementById('1').style.visibility = 'hidden';
    document.getElementById('2').style.visibility = 'hidden';
    document.getElementById('3').style.visibility = 'hidden';
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src",link[R]);
    ifrm.style.width = "640px";
    ifrm.style.height = "480px";
    document.body.appendChild(ifrm);
}