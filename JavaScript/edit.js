var output = document.getElementById("output")
var input = document.getElementById("input")
var Idnumber

/*
function findword() {
	let result = ["getElementById"]
	let restr
	for (re of result) {
		restr+="<li>"+re+"</li>"
	}
	OpenPos(restr, 100, 100)
	for (m of maind.childNodes) {
		m.onclick = function () {
			input.value+=m.innerHTML
		}
	}
}*/


mymenu_Son.select_funcs_list[1].push(function () {
	//olny read
    clearInterval(Idnumber)
	switchto(tab2)
	input.style.display = "none"
})

mymenu_Son.select_funcs_list[1].push(function () {
	switchto(tab2)
	input.style.display = "block"
Idnumber= setInterval(function () {
	mydraw_js.Run_Text()
	to()
	//findword()
}, 50)
})

mymenu_Son.select_funcs_list[1].push(function () {
	clearInterval(Idnumber)
	input.style.display = "none"
	switchto(tab2)
	OpenPos("<input type='file' id='filechooser'/><input value='/'>",0,0)
	var filechooser=document.getElementById("filechooser")
	input.value = filechooser.value
	mydraw_js.Run_Text()
	to()
})

