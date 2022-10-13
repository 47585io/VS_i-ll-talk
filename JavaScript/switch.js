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

function Console(str) {
    tab3.innerHTML = ""
	var tid = document.createElement("textarea")
	tid.value = str
    tab3.appendChild(tid)
    OpenPos("输出到输出窗口", event.pageX-200,event.pageY)
}


