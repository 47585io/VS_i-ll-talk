var myfile = document.querySelector("#file")

function No() {
	Console("这代码想运行？想多了！")
}


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

function indexFive() {
	if (!window.Blob) alert("您的浏览器不支持Blob对象")
	else {
		var blob = new Blob(["1234"])
		alert("支持")
	}
}

var textarea = document.createElement("textarea")
var result = document.createElement("p")
var mybut = document.createElement("button")

function indexSix() {
	mybut.textContent = "Installer"
	textarea.value = "您可以在这里写"
	mybut.onclick = function () {
        let text=textarea.value

		if (!window.Blob) result.innerHTML = "Not Blob"
		else var blob = new Blob([text])
 
		if (window.URL) {
			result.innerHTML =
				'<a download href="' +
				window.URL.createObjectURL(blob) +
				'"target="_blank">Blob Installer</a>'
		}
	}

	writetoConsole([textarea,result,mybut],0)
}