function formatAllP() {
	AllP = document.getElementsByClassName("newp")
	for (P of AllP) {
		var text = P.innerHTML
		var k = 0
		for (var i = 0; i < text.length; i++)
			if (text[i] == "\n") {
				text =
					text.substring(0, i) +
					"<br/>" +
					text.substring(i + 1, text.length + k)
				k += 3
			} else if (text[i] == " ") {
				text =
					text.substring(0, i) +
					"&nbsp;" +
					text.substring(i + 1, text.length + k)
				k += 1
			}
		P.innerHTML = text
	}
}


function initInstall() {
    var Allther = document.getElementsByClassName("ther")
	for (var t of Allther) {
		var but = document.createElement("button")
		but.className = "install"
		but.appendChild(document.createTextNode("复制"))
		t.appendChild(but)
	}
}
function bindInstall() {
	var Allinstall=document.getElementsByClassName("install")
	for (var ins of Allinstall){
		ins.onclick = function () {
			Console(this.parentNode.innerHTML)
		}
		ins.onmouseout = function () {
			Close()
		}
	}
}

formatAllP()
initInstall()
bindInstall()

