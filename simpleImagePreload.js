var images = new Array()
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
	}
};

preload(
	"./industries/images/header/mobile/FinServ_750x350.jpg",
	"./industries/images/header/mobile/Automotive_750x350.jpg",
	"./industries/images/header/mobile/Communications_750x350.jpg",
	"./industries/images/header/mobile/Government_750x350.jpg",
	"./industries/images/header/mobile/Healthcare_750x350.jpg",
	"./industries/images/header/mobile/Manufacturing_750x350.jpg",
	"./industries/images/header/mobile/Retail_750x350.jpg"
);
