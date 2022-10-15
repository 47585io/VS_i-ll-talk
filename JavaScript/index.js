var myfile = document.querySelector("#file")

function indexOne() {
	//myfile.value=""
	writetoConsole([myfile])
	myfile.onchange=function(){alert(this.value)}
}

function indexTwo() {
	//myfile.value = ""
	writetoConsole([myfile])
	myfile.onchange = function () {
		Console("filename:  " + this.files[0].name)
	}
}

function indexThree() {
	//myfile.value = ""
	writetoConsole([myfile])
	myfile.onchange = function () {
		Console("filesize:  " + this.files[0].size, 1)
		Console("filetype:  " + this.files[0].type, 1)
	}
}

function indexFour() {
	//myfile.value = ""
	writetoConsole([myfile])
	myfile.onchange = function () {
		typestr = this.files[0].type
		if (!/image\/\w+/.test(typestr))
			//!/image\/\w+/是一个正则表达式，用于判断它是否以image/开头，
			//当然，和字符串一样，js中的正则表达式也是对象，它的test方法用于将自己和指定字符串进行匹配
			alert("not image")
		else alert(this.files[0].name)
	}
}

