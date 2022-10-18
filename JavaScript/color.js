/*******
 color for code,

*/

var color = {
	red: "#b85653",
	blue: "#61afef",
	yellow: "#d4ba76",
	green: "#98c379",
	zi: "#b876d4",
	brown: "#cd9861",
	bgreen: "#57adbb",
	white: "#abb2bf",
	grey: "grey",
	white: "#ffffff",
	latgreen:"#79c3af"
}

var value = 0

class Draw {
	main = document.getElementById("main")
	output = document.getElementById("output")
	input = document.getElementById("input")
	line_List = []
	Text_List = []
	word_list = []
	Obj_List = []
	Li_Obj_List = []
	src_list = []
	now_obj
	now_li_obj
	laugue = "code"

	constructor() {
		this.line_List = []
		this.Text_List = []
		this.word_list = []
		this.Obj_List = []
		this.Li_Obj_List = []
	}
	endsWith(str, src) {
		for (var i = src.length - 1; i >= 0; i--)
			if (src.substring(i, src.length) == str) return 1
		return 0
	}
	getTexts() {
		//olny get this laugue text
		this.Obj_List = document.getElementsByClassName(this.laugue)
		for (var i = this.Text_List.length; i < this.Obj_List.length; i++) {
			this.Text_List.push(this.Obj_List[i].innerHTML)
			this.Obj_List[i].innerHTML = ""
		}
		//clear obj text
	}
	getLines(text) {
		//from text get lines
		var str = ""
		value++
		//the value is  is global,
		//so it can be used in any subclass without duplicate name
		this.line_List = text.split("\n")
		for (var line of this.line_List)
			str += '<li class="' + value + '"></li>'
		// In order to distinguish the li groups in each label object,
		//values with different values are used for naming
		this.now_obj.innerHTML = str
		//clear now_obj, and add many li(line) for it
		this.Li_Obj_List = document.getElementsByClassName(String(value))
		//then let us get them
	}
	getLines2(text) {
		//from text get lines
		var str = ""
		value++
		//the value is  is global,
		//so it can be used in any subclass without duplicate name
		this.line_List = text.split("\n")
		for (var line of this.line_List)
			str += '<li class="' + value + '"></li>'
		// In order to distinguish the li groups in each label object,
		//values with different values are used for naming
		this.now_obj.innerHTML += str
		//clear now_obj, and add many li(line) for it
		this.Li_Obj_List = document.getElementsByClassName(String(value))
		//then let us get them
	}
	Laugue_Split(line) {
		return line
	}
	getWords(line) {
		//from line get words
		var str = ""
		for (var i = 0; line[i] == " " || line[i] == "\t"; i++) {
			if (line[i] == " ") str += "&nbsp;"
			else if (line[i] == "\t") str += "       "
		}
		//retain ' ' on head
		var tmp = this.Laugue_Split(line)
		//please use your idea add' '，then i can spilt it
		this.word_list = tmp.split(/[ 	]/)
		this.word_list.unshift(str)
		for (var t of this.word_list) this.src_list.push(t)
	}

	Run() {
		//→get All Text With the specified class name
		//→Take one from the text list each time and split it into a row list
		//→Split one line at a time into a word list
		//→Find the word with the specified mark from the word list and color it
		this.getTexts()
		for (var i = 0; i < this.Obj_List.length; i++) {
			this.now_obj = this.Obj_List[i]
			this.getLines(this.Text_List[i])
			for (var j = 0; j < this.Li_Obj_List.length; j++) {
				this.getWords(this.line_List[j])
				this.now_li_obj = this.Li_Obj_List[j]
				this.check()
			}
		}
	}
	Run_Text(i = -1) {
		if (i == -1) {
			this.now_obj = this.output
			this.getLines(this.input.value)
		} else {
			this.getTexts()
			this.now_obj = this.Obj_List[i]
			this.getLines(this.Text_List[i])
		}
		for (var j = 0; j < this.Li_Obj_List.length; j++) {
			this.getWords(this.line_List[j])
			this.now_li_obj = this.Li_Obj_List[j]
			this.check()
		}
	}

	add(str) {
		this.main.innerHTML += '<pre class="code code_js">' + str + "</pre>"
		this.Run_Text(this.Text_List.length)
		to()
	}
	reset(i, str) {
		this.Text_List[i] = str
		this.Run_Text(i)
		to()
	}

	insert(obj, text) {
		//let me insert a text to obj and color for you
		this.now_obj = obj
		this.getLines2(text)
		for (var j = 0; j < this.Li_Obj_List.length; j++) {
			this.getWords(this.line_List[j])
			this.now_li_obj = this.Li_Obj_List[j]
			this.check()
		}
	}

	draw(word, color_index = "white", text = "", yes = 0) {
		//Returns a formatted colored string for insertion
		if (yes == 1)
			var str =
				'<pre style="display:inline;color: ' +
				color[color_index] +
				';text-decoration:line-through;"' +
				'class="T" ' +
				'wantcolor="' +
				color[color_index] +
				'"' +
				"mytext='" +
				text +
				"'>" +
				word +
				"</pre>"
		else
			var str =
				'<pre style="display:inline;color: ' +
				color[color_index] +
				'"  wantcolor="' +
				color[color_index] +
				'"class="T"' +
				" mytext='" +
				text +
				"'>" +
				word +
				"</pre>"
		return str
	}
	find_a(char, color, text = "") {
		//Find text in lines in word and quickly color
		for (var i = 0; i < this.word_list.length; i++) {
			for (var c of char)
				if (
					this.word_list[i] == c ||
					this.word_list[i].indexOf(c) != -1
				)
					this.word_list[i] = this.draw(
						this.word_list[i],
						color,
						text
					)
		}
	}

	find() {}
	//Develop more detailed dyeing methods

	check() {
		//Check and reorganize
		var str = ""
		var word = ""
		this.find()
		//Provide a method to process the words in each line of text,
		//and then I will combine the words into lines and give them to li
		for (var i = 0; i < this.word_list.length; i++) {
			if (
				i == 0 ||
				this.word_list[i].indexOf(".") != -1 ||
				this.word_list[i].indexOf("[") != -1 ||
				(
					(i < this.word_list.length - 1 &&
						this.word_list[i + 1] == ")") ||
					this.word_list[i + 1] == ";")
				||
				(i < this.word_list.length - 1 &&
					this.word_list[i + 1].indexOf("[") != -1) ||
				(i < this.word_list.length - 1 &&
					this.word_list[i + 1].indexOf("]") != -1) ||
				(i < this.word_list.length - 1 &&
					this.word_list[i + 1].indexOf("{") != -1) ||
				(i < this.word_list.length - 1 &&
					this.word_list[i + 1].indexOf("}") != -1)
			)
				str += this.word_list[i]
			else str += this.word_list[i] + "&nbsp;"
		}
		this.now_li_obj.innerHTML = str
	}
}

class Draw_js extends Draw {
	virible_list = [
		"webkitRequestFileSystem",
		"requestFileSystem",
		"TEMPORARY",
		"filesystem",
		"FileError",
		"QUOTA_EXCEEDED_ERR",
		"NOT_FOUND_ERR",
		"INVALID_MODIFICATION_ERR",
		"INVALID_STATE_ERR",
	]
	func_list=[]
	defined_virible = [
		"null",
		"true",
		"false",
		"undefined",
		"arguments",
		"Boolean",
		"Array",
		"Date",
		"Object",
		"eval",
		"Error",
		"EvalError",
		"Function",
		"JOSN",
		"Infinity",
		"NaN",
		"Number",
		"RangeError",
		"ReferenceError",
		"String",
		"SyntaxError",
		"TypeError",
		"URIError",
	]
	keyword = [
		"function",
		"static",
		"var",
		"else if",
		"if",
		"else",
		"do",
		"while",
		"for",
		"in",
		"of",
		"break",
		"countine",
		"let",
		"const",
		"static",
		"class",
		"extends",
		"switch",
		"case",
		"return",
		"try",
		"catch",
		"throw",
		"debuger",
		"use strict",
		"new",
		"delete",
		"typeof",
	]
	class_obj_list = [
		"window",
		"document",
		"History",
		"Url",
		"Number",
		"String",
		"Array",
		"Date",
		"Math",
		"RegExp",
		"Element",
		"attributes",
		"Navigator",
		"Screen",
		"Location",
		"FileReader",
		"FileSystem",
		"URL",
	]
	constructor() {
		super()
		this.laugue = "code_js"
	}
	
	Laugue_Split(line) {
		var tmp = line
		var tmp2 = line
		var k = 0
		for (var i = 0; i < tmp2.length; i++) {
			if (tmp2[i] == "." || tmp2[i] == "(" || tmp2[i] == ",") {
				tmp =
					tmp2.substring(0, i + 1) +
					" " +
					tmp2.substring(i + 1, line.length + k)
				tmp2 = tmp
				i++
				k++
			} else if (
				tmp2[i] == ")" ||
				tmp2[i] == "]" ||
				tmp2[i] == "}" ||
				tmp2[i] == "{" ||
				tmp2[i] == ";"
			) {
				tmp =
					tmp2.substring(0, i) +
					" " +
					tmp2.substring(i, line.length + k)
				tmp2 = tmp
				i++
				k++
			} else if (tmp2[i] == '"') {
				i++
				for (; tmp2[i] != '"' && i < tmp2.length; i++) continue
			} else if (tmp2[i] == "'") {
				i++
				for (; tmp2[i] != "'" && i < tmp2.length; i++) continue
			} else if (
				tmp2[i] == "=" ||
				tmp2[i] == "+" ||
				tmp2[i] == "-" ||
				tmp2[i] == "*" ||
				tmp2[i] == "&&" ||
				tmp2[i] == "||" ||
				tmp2[i] == "[" ||
				tmp2[i] == ":"
			) {
				if (
					tmp2[i - 1] != " " &&
					tmp2[i + 1] != " " &&
					tmp2[i - 1] != tmp2[i] &&
					tmp2[i + 1] != tmp2[i]
				) {
					tmp =
						tmp2.substring(0, i) +
						" " +
						tmp2[i] +
						" " +
						tmp2.substring(i + 1, line.length + k)
					tmp2 = tmp
					i += 2
					k += 2
				} else if (
					tmp2[i - 1] != " " &&
					tmp2[i + 1] == " " &&
					tmp2[i - 1] != tmp2[i]
				) {
					tmp =
						tmp2.substring(0, i) +
						" " +
						tmp2[i] +
						tmp2.substring(i + 1, line.length + k)
					tmp2 = tmp
					i += 1
					k += 1
				} else if (
					tmp2[i - 1] == " " &&
					tmp2[i + 1] != " " &&
					tmp2[i + 1] != tmp2[i]
				) {
					tmp =
						tmp2.substring(0, i) +
						tmp2[i] +
						" " +
						tmp2.substring(i + 1, line.length + k)
					tmp2 = tmp
					i += 1
					k += 1
				}
			}
		}
		return tmp
	}
	find() {
		this.find_a(
			[
				"+=",
				"-=",
				"*=",
				"/=",
				"==",
				"%=",
				"++",
				"--",
				"+",
				"-",
				"*",
				"/",
				"%",
				"&lt;",
				"&gt;",
				"&",
				"|",
				"^",
				"!",
			],
			"bgreen"
		)
		this.find_a(["]", "["], "latgreen")
		this.find_a(["(", ")"], "blue")
		this.find_a(["{", "}"], "zi")
		this.find_a(['"', "'"], "green")
		this.find_a([".", ":"], "yellow")
		this.find_a([","], "red")
	}

	find_a(char, color) {
		//find
		for (var i = 0; i < this.word_list.length; i++) {
			try {
				if (this.word_list[i].indexOf("<pre") != -1) continue
				if (this.word_list[i].indexOf("//") != -1) {
					for (; i < this.word_list.length; i++)
						this.word_list[i] = this.draw(this.word_list[i], "grey")
					return
				} else if (this.word_list[i].indexOf("~$") != -1) {
					this.word_list[i] =
						this.word_list[i].substring(
							0,
							this.word_list[i].indexOf("~$")
						) +
						this.word_list[i].substring(
							this.word_list[i].indexOf("~$") + 2,
							this.word_list[i].length
						)
					this.word_list[i] = this.draw(
						this.word_list[i],
						"white",
						"ERROR!!!",
						1
					)
					this.now_li_obj.style.background = "pink"
				} else if (this.keyword.indexOf(this.word_list[i]) != -1) {
					if (
						this.word_list[i] == "class" &&
						i < this.word_list.length - 1
					) {
						this.class_obj_list.push(this.word_list[i + 1])

						this.word_list[i + 1] = this.draw(
							this.word_list[i + 1],
							"yellow",
							"class: " + this.word_list[i + 1]
						)
					}
					this.word_list[i] = this.draw(this.word_list[i], "zi")
				} else if (
					!isNaN(Number(this.word_list[i])) ||
					this.defined_virible.indexOf(this.word_list[i]) != -1
				)
					this.word_list[i] = this.draw(this.word_list[i], "brown")
				else if (this.word_list[i + 1] == "=") {
					this.virible_list.push(this.word_list[i])
					this.word_list[i + 1] = this.draw(
						this.word_list[i + 1],
						"bgreen"
					)
					this.word_list[i] = this.draw(
						this.word_list[i],
						"red",
						"virible: " + this.word_list[i]
					)
				} else if (
					this.virible_list.indexOf(this.word_list[i]) != -1 ||
					this.virible_list.indexOf(
						this.word_list[i].substring(
							0,
							this.word_list[i].length - 1
						)
					) != -1
				)
					this.word_list[i] = this.draw(
						this.word_list[i],
						"red",
						"virible: " + this.word_list[i]
					)
				else if (this.class_obj_list.indexOf(this.word_list[i]) != -1)
					this.word_list[i] = this.draw(
						this.word_list[i],
						"yellow",
						"object: " + this.word_list[i]
					)
				else if (this.func_list.indexOf(this.word_list[i]) != -1)
					this.word_list[i] = this.draw(
						this.word_list[i],
						"blue",
						"function: " + this.word_list[i]
					)
				else {
					for (var c of char) {
						if (
							this.word_list[i] == c ||
							this.word_list[i].indexOf(c) != -1
						)
							if (c == ".") {
								this.word_list[i] = this.draw(
									this.word_list[i],
									color,
									"object: " + this.word_list[i]
								)
								
							} else if (c == "(") {
								console.log(this.word_list[i])
								this.func_list.push(this.word_list[i].substring(0,this.word_list[i].length-1))
								this.word_list[i] = this.draw(
									this.word_list[i],
									color,
									"function :  " + this.word_list[i] + "...)"
								)
									
							} else if (c == ",") {
								this.virible_list.push(
									this.word_list[i].substring(
										0,
										this.word_list[i].length - 1
									)
								)
								this.word_list[i] = this.draw(
									this.word_list[i],
									"red",
									"virible: " + this.word_list[i]
								)
							} else
								this.word_list[i] = this.draw(
									this.word_list[i],
									color
								)
					}
				}
			} catch (a) {
				this.word_list[i] = this.draw(
					this.word_list[i],
					"white",
					"ERROR!!!",
					1
				)
			}
		}
	}
}

class Draw_html extends Draw {
	constructor() {
		super()
		this.laugue = "code_html"
	}
	Laugue_Split(line) {
		var tmp = line
		var tmp2 = line
		var k = 0
		for (var i = 0; i < tmp2.length; i++) {
			if (tmp2[i] == ">") {
				tmp =
					tmp2.substring(0, i) +
					" &gt; " +
					tmp2.substring(i + 1, line.length + k)
				i += 6
				k += 6
				tmp2 = tmp
			} else if (tmp2[i] == "<") {
				tmp =
					tmp2.substring(0, i) +
					" &lt;" +
					tmp2.substring(i + 1, line.length + k)
				tmp2 = tmp
				i += 5
				k += 5
			} else if (tmp2[i] == "=") {
				if (tmp2[i - 1] != " " && tmp2[i + 1] != " ") {
					tmp =
						tmp2.substring(0, i) +
						"= " +
						tmp2.substring(i + 1, line.length + k)
					tmp2 = tmp
					i += 2
					k += 2
				} else if (tmp2[i - 1] != " " && tmp2[i + 1] == " ") {
					tmp =
						tmp2.substring(0, i) +
						"= " +
						tmp2.substring(i + 1, line.length + k)
					tmp2 = tmp
					i += 2
					k += 2
				} else if (tmp2[i] == '"') {
					i++
					for (; i < tmp2.length; i++)
						if (tmp2[i] == '"') {
							tmp =
								tmp2.substring(0, i + 1) +
								" " +
								tmp2.substring(i + 1, line.length + k)
							tmp2 = tmp
							i += 1
							k += 1
							break
						}
				}
			}
		}
		return tmp
	}

	find() {
		var re = 0
		for (var i = 0; i < this.word_list.length; i++) {
			try {
				re = this.find_a(["&lt;", "&gt;"], "red", i, "Tag")
				re = this.find_a(["="], "brown", i, "Attribute")
				re = this.find_a(['"', '"'], "green", i)
			}
			catch (a) {
				this.word_list[i] = this.draw(this.word_list[i], "white", "ERROR", 1)
			}
		}
	}
	find_a(char, color, i, text = "") {
		if (this.word_list[i].indexOf("<pre") != -1) return
		if (this.word_list[i].startsWith("&lt;!--")) {
			for (; i < this.word_list.length; i++) {
				this.word_list[i] = this.draw(this.word_list[i], "grey")
			}
		} else if (this.word_list[i].indexOf("~$") != -1) {
			this.word_list[i] =
				this.word_list[i].substring(
					0,
					this.word_list[i].indexOf("~$")
				) +
				this.word_list[i].substring(
					this.word_list[i].indexOf("~$") + 2,
					this.word_list[i].length
				)
			this.word_list[i] = this.draw(
				this.word_list[i],
				"white",
				"ERROR!!!",
				1
			)
			this.now_li_obj.style.background = "pink"
		}
		else {
			for (var c of char)
				if (
					this.word_list[i] == c ||
					this.word_list[i].startsWith(c) ||
					this.endsWith(c, this.word_list[i])
				) {
					if (c == "=")
						this.word_list[i] = this.draw(
							this.word_list[i],
							color,
							text + ": " + this.word_list[i]
						)
					else if (c == '"')
						this.word_list[i] = this.draw(this.word_list[i], color)
					else
						this.word_list[i] = this.draw(
							this.word_list[i],
							color,
							text +
								": " +
								this.word_list[i].substring(
									4,
									this.word_list[i].length
								)
						)
				}
		}
	}
}

class Draw_css extends Draw {
	to_split = [".", "#", ":", '"', ";", "{","!", "]", "[", "/", ")"]
	first_line = 0
	is_kong = 0
	tag_lib = [
		"*",
		"html",
		"body",
		"head",
		"title",
		"a",
		"img",
		"audio",
		"input",
		"b",
		"sup",
		"i",
		"small",
		"font",
		"em",
		"strong",
		"sub",
		"ins",
		"del",
		"code",
		"kbd",
		"samp",
		"var",
		"pre",
		"abbr",
		"address",
		"bdo",
		"blockquote",
		"cite",
		"q",
		"dfn",
		"p",
		"div",
		"ul",
		"li",
		"ol",
		"dl",
		"dt",
		"dd",
		"hr",
		"br",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"main",
		"xmp",
		"style",
		"script",
		"link",
		"textarea",
		"button",
		"select",
		"option",
		"optgroup",
		"picture",
		"source",
		"map",
		"area",
		"table",
		"tr",
		"th",
		"td",
		"caption",
		"from",
		"label",
		"fieldset",
		"legend",
		"datalist",
		"keygen",
		"output",
		"span",
		"frame",
		"iframe",
		"object",
		"embed",
		"marguee",
		"canvas",
		"video",
		"base",
		"meta",
		"details",
		"summary",
		"mark",
		"noscript",
		"figure",
		"svg",
		"circle",
		"line",
		"polyline",
		"rect",
		"ellipse",
		"polygon",
		"path",
		"text",
		"use",
		"g",
		"defs",
		"pattern",
		"animate",
		"image",
		"animateTransform",
	]
	constructor() {
		super()
		this.laugue = "code_css"
	}
	isTag(word) {
		var word_list = word.split(/[ 	]/)
		for (var w of word_list) if (this.tag_lib.indexOf(w) != -1) return 1
		return 0
	}
	isNumber(word) {
		if (!isNaN(Number(word[0]))) return 1

		return 0
	}
	getWords(line) {
		this.word_list = []
		var str = line

		var last_index = 0
		for (var i = 0; i < str.length; i++) {
			if (!isNaN(Number(str[i])) || this.to_split.indexOf(str[i]) != -1) {
				this.word_list.push(str.substring(last_index, i))
				last_index = i
			}
		}
		this.word_list.push(str.substring(last_index, str.length))
	}
	find_a(char, color, i, text = "") {
		//Find text in lines in word and quickly color
		if (this.word_list[i].indexOf("<pre") != -1) return
		if (this.word_list[i].startsWith("/*")) {
			for (; i < this.word_list.length; i++) {
				this.word_list[i] = this.draw(this.word_list[i], "grey")
			}
		} else if (this.word_list[i].indexOf("~$") != -1) {
			this.word_list[i] =
				this.word_list[i].substring(
					0,
					this.word_list[i].indexOf("~$")
				) +
				this.word_list[i].substring(
					this.word_list[i].indexOf("~$") + 2,
					this.word_list[i].length
				)
			this.word_list[i] = this.draw(
				this.word_list[i],
				"white",
				"ERROR!!!",
				1
			)
			this.now_li_obj.style.background = "pink"
		} else if (this.isTag(this.word_list[i]))
			this.word_list[i] = this.draw(
				this.word_list[i],
				"red",
				"Tag: " + this.word
			)
		else if (
			this.first_line == 0 &&
			this.word_list.length - 1 > i &&
			this.word_list[i + 1].indexOf(":") != -1
		)
			this.word_list[i] = this.draw(
				this.word_list[i],
				"brown",
				"Attribute: " + this.word
			)
		else
			for (var c of char) {
				if (
					this.word_list[i] == c ||
					this.word_list[i].indexOf(c) != -1
				) {
					if (text != "")
						this.word_list[i] = this.draw(
							this.word_list[i],
							color,
							text + this.word
						)
					else {
						this.word_list[i] = this.draw(this.word_list[i], color)
					}
				}
			}
	}
	find() {
		for (var i = 0; i < this.word_list.length; i++) {
			this.word = this.word_list[i]
			try {
				if (this.word_list.indexOf(";") == -1) {
					//first line
					this.first_line = 1
					this.find_a(["#"], "blue", i, "id: ")
					this.find_a(["."], "yellow", i, "class ")
					this.find_a([":", "::"], "bgreen", i, "Pseudo ")
					this.find_a(["["], "brown", i, "Attribute: ")
					this.find_a(["]"], "brown", i)
				} else {
					//other
					this.first_line = 0
					this.find_a([":"], "brown", i)
					this.find_a(["(", ")"], "bgreen", i, "func: ")
				}
				this.find_a(["@", "}", "{","!"], "zi", i)
				this.find_a(['"'], "green", i)
			} catch (a) {
				this.word_list[i] = this.draw(
					this.word_list[i],
					"white",
					"ERROR",
					1
				)
			}
		}
	}
	check() {
		//Check and reorganize
		var str = ""
		var word = ""
		this.find()
		//Provide a method to process the words in each line of text,
		//and then I will combine the words into lines and give them to li
		for (word of this.word_list) str += word
		this.now_li_obj.innerHTML = str
	}
}

class Draw_py extends Draw_js {
	keyword = [
		"class",
		"def",
		"lambda",
		"for",
		"in",
		"while",
		"if",
		"elif",
		"else",
		"try",
		"except",
	]
	defined_virible = ["None"]
	class_obj_list = [
		"list",
		"tuple",
		"dict",
		"set",
		"int",
		"float",
		"str",
		"repr",
		"double",
		"Exception",
	]
	constructor() {
		super()
		this.laugue = "code_py"
	}
}


var mydraw_text= new Draw()
var mydraw_js = new Draw_js()
mydraw_js.Run()
var mydraw_html = new Draw_html()
mydraw_html.Run()
var mydraw_css = new Draw_css()
mydraw_css.Run()
var mydraw_py = new Draw_py()
mydraw_py.Run()

function Draw_broken(mark, Laugue_list, Laugue_obj_list) {
	function splitMark(str) {
		var result = []
		var all = str.split(";")
		for (a of all) result.push(a.split(","))
		return result
	}
	function rangeListToStr(list, start, end) {
		var endstr = ""
		for (var i = start; i < end; i++) {
			if (i == end - 1) endstr += list[i]
			else endstr += list[i] + "\n"
			//最后一行总是多出一个'\n', 所以总会空出一行
		}
		return endstr
	}

	var broken = document.getElementsByClassName("broken")
	for (var bor of broken) {
		var paragraph = bor.getAttribute(mark)
		var result = splitMark(paragraph)
		var line_List = bor.innerHTML.split("\n")
		src.push(bor.innerHTML)
		bor.innerHTML = ""
		for (re of result) {
			for (var i = 0; i < Laugue_obj_list.length; i++) {
				if (re[0] == Laugue_list[i]) {
					var endstr = rangeListToStr(
						line_List,
						Number(re[1]),
						Number(re[2])
					)
					Laugue_obj_list[i].insert(bor, endstr)

					break
				}
			}
		}
	}
}
var src = []
Draw_broken("mark", ["js", "css", "html"], [mydraw_js, mydraw_css, mydraw_html])

to()

