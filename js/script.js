function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

function fontsStyle(params) {

let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');

	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
		
			if (items) {
			let c_fontname;
			for (var i = 0; i < items.length; i++) {
			let fontname = items[i].split('.');
			fontname = fontname[0];
				if (c_fontname != fontname) {
					fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
				}
				c_fontname = fontname;
			}
			}
		})
	}
}
		
function cb() {}







// ======Event Listene

const ado = document.querySelectorAll('.content__cart');

// console.log('ado', ado);
// console.log('ccha', ccha);

for(let ad of ado) {
	ad.addEventListener('click', (e) => {
		let df = e.target.childElementCount
		console.log(df)
		console.log(ad)
		console.log(e)
		ad.classList.toggle('content__active');
	})
}



// function rmMouseOver(event) {

// 	let s = event.target;
// 	// console.log(event);

// 	if (s.tagName != 'img') ;

// 	// ccha.classList.remove('content__cart-active')
// 	// ccha.classList.add('content__cart-hidden')
// 	console.log("rm Done!!!");
// }