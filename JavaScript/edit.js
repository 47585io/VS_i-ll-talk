var output = document.getElementById("output")
var input = document.getElementById("input")
var Idnumber

var laugue = {
	"text":mydraw_text,
	"js":mydraw_js,
	"css":mydraw_css,
	"html":mydraw_html,
	"python":mydraw_py} 

var now_laugue ="text"

var ul = document.createElement("ul")
for (key of Object. keys(laugue)) {
	var l = document.createElement("li")
	text = document.createTextNode(key)
	l.appendChild(text)
	ul.appendChild(l)
}

ul.onclick = function (e) {
	alert(e.target.innerText)
    now_laugue= e.target.innerText
}

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
	laugue[now_laugue].Run_Text()
	to()
	//findword()
}, 50)
})


mymenu_Son.select_funcs_list[1].push(function () { 
	OpenPos("",0, 0)
	maind.appendChild(ul)
})

mymenu_Son.select_funcs_list[1].push(function () {
	clearInterval(Idnumber)
	input.style.display = "none"
	switchto(tab2)
	OpenPos("<input type='file' id='filechooser'/><input value='/'>",0,0)
	var filechooser=document.getElementById("filechooser")
	filechooser.onchange = function () {
		input.value = this.value
		mydraw_js.Run_Text()
		to()
		this.style.display="none"
	}
})

