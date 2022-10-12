var output = document.getElementById("output")
var input = document.getElementById("input")
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
	switchto(tab2)
	input.style.display = "none"
	clearInterval()
})

mymenu_Son.select_funcs_list[1].push(function () {
	switchto(tab2)
	input.style.display = "block"
setInterval(function () {
	mydraw_js.Run_Text()
	to()
	//findword()
}, 50)
})

mymenu_Son.select_funcs_list[1].push(function () {
	switchto(tab2)
	input.value = "alert('my')"
	mydraw_js.Run_Text()
	to()
	clearInterval()
})

