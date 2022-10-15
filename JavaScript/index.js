var myfile = document.querySelector("#myfile")
myfile.onchange = function (event) {
	alert(this.value)
}
//例1

var file = document.getElementById("files")
file.onchange = function () {
	Console(String(this.files[0].name))
}
//例2

var three = document.getElementById("threeinput")
three.onchange = function () {
	Console(String(this.files[0].size)+"\n"+String(this.files[0].type))	
}
