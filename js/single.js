
//创建个只有一张图片的页面，没啥好说的
function createSingle(pageid){
	var tmp=pageid.split('-');
	var path='img/'+tmp[1]

	var img=document.createElement('img');
	img.setAttribute('id','singleimg');
	img.setAttribute('class','singleimg');
	img.setAttribute('src',path+'/0.jpg');
	img.setAttribute('onclick','clickSingle()');
	document.getElementById('game').appendChild(img);
	document.body.background='';
	document.body.style.backgroundColor='';
}


function clickSingle(){
	deleteImgById('singleimg');
	newpage();
}