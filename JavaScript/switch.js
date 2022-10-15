var main = document.getElementById("main")
var tab2 = document.getElementById("tab2")
var tab3 = document.getElementById("tab3")

tab3.style.display = "none"
tab2.style.display="none"
var nowtab = main

function switchto(obj) {
    if (obj == nowtab)
        return
    obj.style.display = "block"
    nowtab.style.display = "none"
    nowtab=obj
}

var olnytext
function clearConsole() {
    tab3.innerHTML = ""
    olnytext = document.createElement("textarea")
    tab3.appendChild(olnytext)
}

function Console(str, save = 0) {
    if (!save) {
        olnytext.value=""
    }
    olnytext.value += str+"\n"
    OpenPos("输出到输出窗口", event.pageX-200,event.pageY)
}

function writetoConsole(list) {
    clearConsole()
    for (var l of list) {
        if (typeof (l) == 'string') {
            l = document.createTextNode(l)
        }
        tab3.insertBefore(l,olnytext)
    }
}

function Run(str) {
	window.setTimeout(str, 0)
}

clearConsole()
