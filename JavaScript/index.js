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


//***"""" */
var br = document.createElement("br")
var br2 = document.createElement("br")
var br3 = document.createElement("br")
var input1=document.createElement("input")
input1.setAttribute("type","button")
input1.setAttribute("value", "读取图像")
var input2 = document.createElement("input")
input2.setAttribute("type", "button")
input2.setAttribute("value", "读取二进制数据")
var input3 = document.createElement("input")
input3.setAttribute("type", "button")
input3.setAttribute("value", "读取文本")

var retu = document.createElement("div")
var Reader = new FileReader()
function ReadImage(myfile,retu) {
	if (!myfile.files[0].type.startsWith("image"))
		return 0
	Reader.readAsDataURL(myfile.files[0])
	Reader.onload = function () {
		var div = document.createElement("div")
		
	var img = document.createElement("img")
		img.setAttribute("src", Reader.result)
		div.appendChild(img)
		div.style.overflow="scroll"
		retu.appendChild(div)
		
	}
	return 1
}
function ReadDate(myfile,retu) {

	Reader.readAsBinaryString(myfile.files[0])
	Reader.onload = function () {
		retu.innerHTML = this.result
	}
 }
function ReadText(myfile,retu) {
		Reader.readAsText(myfile.files[0])
		Reader.onload = function () {
			retu.innerHTML = this.result
		}
	}

function indexSeven() {
	writetoConsole([myfile,br, input1,br2, input2,br3, input3, retu], 0)
	input1.onclick = function () { ReadImage(myfile,retu) }
	input2.onclick = function () { ReadDate(myfile,retu) }
	input3.onclick = function () { ReadText(myfile,retu) }
}

////

function readFile(file) {
	file=file.files[0]
	var reader = new FileReader()
	reader.onload = function (e) {
	    var div = document.createElement("div")
		var img = document.createElement("img")
		img.setAttribute("src", this.result)
		div.appendChild(img)
		div.style.overflow = "scroll"
		retu.appendChild(div)
		
		Console("load",1)
	}
	reader.onprogress = function (e) {
		Console("progress",1)
	}
	reader.onabort = function (e) {
		Console("abort",1)
	}
	reader.onerror = function (e) {
		Console("error",1)
	}
	reader.onloadstart = function (e) {
		Console("loadstart",1)
	}
	reader.onloadend = function (e) {
		Console("loadend",1)
	}
	reader.readAsDataURL(file)
}

function indexEight() {
	writetoConsole([myfile,retu])
	myfile.onchange = function () {
		readFile(this,)
	}
}


/////

function indexNine() {
	writetoConsole([myfile,retu])
	myfile.onchange = function () { file_onchange(this.files[0]) }
    function file_onchange(file) {
		
		if (!/image\/\w+/.test(file.type)) {
			alert("请选择一个图像文件！")
			return
		}
		var slice = file.slice(0, 4)
		var reader = new FileReader()
		reader.readAsArrayBuffer(slice)
		var type
		reader.onload = function (e) {
			var buffer = this.result
			var view = new DataView(buffer)
			var magic = view.getInt32(0, false)
			if (magic < 0) magic = magic + 0x1000000000
			magic = magic.toString(16).toUpperCase()
			if (magic.indexOf("FFD8FF") >= 0) type = "jpg文件"
			if (magic.indexOf("89504E47") >= 0) type = "png文件"
			if (magic.indexOf("47494638") >= 0) type = "gif文件"
			if (magic.indexOf("49492A00") >= 0) type = "tif文件"
			if (magic.indexOf("424D") >= 0) type = "bmp文件"
			retu.innerHTML = "文件类型为：" + type
		}
	}
}


function errorHandler(FileError) {
	switch (FileError.code) {
		case FileError.QUOTA_EXCEEDED_ERR:
			Console("文件系统的存储空间超过磁盘限制控制中指定的空间尺寸")
			break
		case FileError.NOT_FOUND_ERR:
			Console("未找到文件或目录")
			break
		case FileError.INVALID_MODIFICATION_ERR:
			Console("对文件或目录所指定的操作不能被执行")
			break
		case FileError.INVALID_STATE_ERR:
			Console("指定的状态无效")
			break
	}
}
/////
function indexTen() {	
	window.requestFileSystem =
		window.requestFileSystem || window.webkitRequestFileSystem
	var fs = null
	if (window.requestFileSystem) {
		window.requestFileSystem(
			window.TEMPORARY,
			1024 * 1024,
			function (filesystem) {
				fs = filesystem
				Console("Ok")
			},
			errorHandler
		)
	}
}


//////
function indexEleven() {
	input1.setAttribute("type", "text")
	input1.setAttribute("value", "test.txt")
	
	input2.setAttribute("type", "text")
	input2.setAttribute("value", "0")
	
	input3.setAttribute("type", "button")
	input3.setAttribute("value", "创建文件")
	input3.onclick = createFile
	writetoConsole([input1,br,input2,br2,input3,br3,retu])
    window.requestFileSystem =
		window.requestFileSystem || window.webkitRequestFileSystem

	function createFile() {
		var size = input2.value
		window.requestFileSystem(
			PERSISTENT,
			size,
			function (fs) {
				var filename = input1.value
				fs.root.getFile(
					filename,
					{
						create: true,
					},
					function (fileEntry) {
						
						var text = "完整路径：" + fileEntry.fullPath + "< br>"
						text += "文件名：" + fileEntry.name + "< br>"
						retu.innerHTML = text
					},
					errorHandler
				)
			},
			errorHandler
		)
	}

	
}