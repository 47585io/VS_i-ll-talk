class Menu{
    menu = document.getElementById("menu")
    chu() {
        if (this.menu.getAttribute("isopen") == "1")
            this.Close()
        else
            this.Open()
    }
    Open() {
        this.menu.style.width = "auto"
        this.menu.setAttribute("isopen","1")
    }
    Close() {
        this.menu.style.width = 30 + "px"
         this.menu.style.height = 30 + "px"
        this.menu.setAttribute("isopen", "0")
    }
}


class menuson {
	select_funcs_list=[]
    select_list = []
    constructor(strlist) {
        for (var str of strlist)
        {
            this.select_list.push(document.getElementById(str))
            this.select_funcs_list.push([])
        }
    }
}

var mymenu_Son = new menuson(['goto','edit','help'])

function bind_menuson() {
	for (let i = 0; i < mymenu_Son.select_list.length; i++) {
        mymenu_Son.select_list[i].onchange = function () {
            if (
				mymenu_Son.select_funcs_list[i][
					mymenu_Son.select_list[i].selectedIndex - 1
				]
			)
				mymenu_Son.select_funcs_list[i][
					mymenu_Son.select_list[i].selectedIndex - 1
				]()
            mymenu_Son.select_list[i].selectedIndex = 0
        }
    }
}

bind_menuson()



var vs = document.getElementById("vscode")
var mymenu = new Menu()
vs.onclick = function () {
    mymenu.chu()
}
vs.oncontextmenu = function () {
	mymenu.chu()
}
vs.ondblclick = function () {
	mymenu.chu()
}
vs.onmouseover =  function () {
	mymenu.chu()
}


