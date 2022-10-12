/* 
T
*/

var maind = document.getElementById("maind")

function to() {
    var allT= document.getElementsByClassName("T")
    for (var aT of allT) {
        aT.onmouseover = function () { Open(this) };
    }
    maind.onmouseover = function () { this.setAttribute("ishover", "1") }
    maind.onmouseout = function () {
        this.setAttribute("ishover", "0")
        Close()
    }
}


class pos {
	x = 0
	y = 0
}

function Open(obj) {
    if (obj.getAttribute("mytext")=="")
        return
    maind.innerHTML =obj.getAttribute("mytext")
    to()
    var mypos = new pos()
    mypos.x = event.pageX
    mypos.y = event.pageY
    width =0
    if (width > window.innerWidth) {
        maind.style.left = window.innerWidth  - maind.innerHTML.length * 20 + "px"
    }
    else
        maind.style.left = mypos.x + "px"
    maind.style.top = mypos.y + "px"
    maind.style.color = obj.style.color
    if (obj.wantcolor)
        maind.style.color = obj.getAttribute("wantcolor")
   
}
function Close() {
	maind.style.top = "-1000px"
}

function OpenPos(str,x,y) {
    maind.style.top = y+"px"
    maind.style.left = x+"px"
    maind.innerHTML = str
}

