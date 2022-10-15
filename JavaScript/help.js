

mymenu_Son.select_funcs_list[2].push(function () {
	switchto(main)
})

mymenu_Son.select_funcs_list[2].push(function () {
	OpenPos("g",0,0)
})

mymenu_Son.select_funcs_list[2].push(function () {
	try {
		Run(input.value)
	}
	catch (e){
		console.log(e)
	}
})

mymenu_Son.select_funcs_list[2].push(function () {
	switchto(tab3)
})


