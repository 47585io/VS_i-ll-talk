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

function Console(str, save = 0) {
    if(!save)
    tab3.innerHTML = ""
	var tid = document.createElement("textarea")
	tid.value = str
    tab3.appendChild(tid)
    OpenPos("输出到输出窗口", event.pageX-200,event.pageY)
}

function writetoConsole(list) {
    tab3.innerHTML=""
    for (var l of list) {
        if (typeof (l) == 'string') {
            l = document.createTextNode(l)
        }
        tab3.appendChild(l)
    }
}

function Run(str) {
	window.setTimeout(str, 0)
}
