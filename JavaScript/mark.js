class Mark_Stack{
    Stack = []
    index = -1
    go(i=-666) {
        if (i != -666)
        {
            this.index = i
            return this.Stack[i]
        }
        else if (this.index < this.Stack.length-1&&this.Stack.length>0) {
            this.index++
            return this.Stack[this.index]   
        }
    }
    retu(i=-666) {
        if ((i != -666)) {
            this.index=i
            return this.Stack[i]
        }
        else if (this.index > 0&&this.Stack.length>0) {
            this.index--
            return this.Stack[this.index]
        }
    }
    
    draw() {
        var tmp = document.createElement("div")
        tmp.className = "mark"
        document.body.appendChild(tmp)
        return tmp
    }
    addMark(y=null) { 
        var tmp = this.draw()
        if(y)
            tmp.style.top = y + "px"
        else
             tmp.style.top = event.pageY + "px"
        this.Stack.push(tmp)  
    }
    DelMark(y = null) {
        if (!y) {
            var i=this.Stack.length-1
            document.body.removeChild(this.Stack[i])
            this.Stack.splice(i, 1)
        }
        for (var i = 0; i < this.Stack.length;i++) {
            var top=Number(this.Stack[i].style.top.substring(0, this.Stack[i].style.top.length - 2))
            if (top < y + 20 && top > y - 40) {
                document.body.removeChild(this.Stack[i])
                this.Stack.splice(i,1)
                    }
        }
        if (this.index > -1)
            this.index--
    }
    clear() {
        for (; this.Stack.length > 0;) {
            document.body.removeChild(this.Stack[this.Stack.length-1])
            this.Stack.splice(this.Stack.length-1, 1)
        }
        this.index=-1
    }
}

var myMark = new Mark_Stack()
document.body.ondblclick = function () { myMark.addMark(event.pageY) }
document.body.oncontextmenu=function(){myMark.DelMark(event.pageY)}


function bindMark(){
    mymenu_Son.select_funcs_list[0].push(function () {
        var tmp = myMark.retu()
		if (!tmp) return
		var top = Number(tmp.style.top.substring(0, tmp.style.top.length - 2))
		window.scrollTo(0, top)
    })
     mymenu_Son.select_funcs_list[0].push(function () {
			var tmp = myMark.go()
			if (!tmp) return
			var top = Number(
				tmp.style.top.substring(0, tmp.style.top.length - 2)
			)
			window.scrollTo(0, top)
     })
     mymenu_Son.select_funcs_list[0].push(function () {
			var tmp = myMark.go(0)
			if (!tmp) return
			var top = Number(
				tmp.style.top.substring(0, tmp.style.top.length - 2)
			)
			window.scrollTo(0, top)
     })
    mymenu_Son.select_funcs_list[0].push(function () {
		var tmp = myMark.go(myMark.Stack.length-1)
		if (!tmp) return
		var top = Number(tmp.style.top.substring(0, tmp.style.top.length - 2))
		window.scrollTo(0, top)
    })
      mymenu_Son.select_funcs_list[0].push(function () {
          var i = Number(window.prompt())
          if (isNaN(i))
              return
          var tmp = myMark.go(i)
			if (!tmp) return
			var top = Number(
				tmp.style.top.substring(0, tmp.style.top.length - 2)
			)
			window.scrollTo(0, top)
      })
    mymenu_Son.select_funcs_list[0].push(function () {
		window.scrollTo(0, 0)
	})
    mymenu_Son.select_funcs_list[0].push(function () {
		window.scrollTo(0, 9999999)
	})
    
    mymenu_Son.select_funcs_list[0].push(null)
    mymenu_Son.select_funcs_list[0].push(null)
    mymenu_Son.select_funcs_list[0].push(function () {
         myMark.clear()
    })
    mymenu_Son.select_funcs_list[0].push(null)
    
}

bindMark()

