$('.download').on('click', function(){
	var link = document.createElement('a');
	link.setAttribute('href', 'https://i.ibb.co/h8nvQFJ/download.png');
	link.setAttribute('download', 'download.png');
	link.click();
	return false;
});