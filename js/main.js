'use strict';

function Otvori(){
	alert(`You're being redirected to code`);
	console.log(`Opened code`);
}

var time = $(`#date`);
var h;
var m;
var s;
function vrijeme(){
	var now = new Date();
	h = now.getHours();
	m = now.getMinutes();
	s = now.getSeconds();
	date.innerHTML = `${h}:${m}:${s}`
}
setInterval(vrijeme,1);

var klik = document.getElementById(`klik`);
var klik11 = $('#klik').on('click',function (){
	alert ('you are using jquery');
})
klik.addEventListener(`click`,() => {
	document.getElementById(`form`).style.display = `block`;
	document.getElementById(`klik`).style.display = `none`;
	document.getElementById(`submit`).style.display = `block`;
	document.getElementById(`reset`).style.display = `block`;
});

var zadatak = document.getElementById(`zd`);
var mail = document.getElementById(`email`);
var sbmt = document.getElementById(`submit`);
var rst = document.getElementById(`reset`);
var xx;

sbmt.addEventListener(`click`,validate);
zadatak.addEventListener(`focus`,clear);
mail.addEventListener(`focus`,clear);
rst.addEventListener(`click`,clear1);

function validate(){
	xx = 1;
	if (zadatak.value == ``) {
		zadatak.value = `Required field`;
		zadatak.style.color = `red`;
		xx = 0;
	}
	if (mail.value == ``) {
		mail.value = `Required field`;
		mail.style.color = `red`;
		xx = 0;
	}
	if (mail.value != `` && ((mail.value.indexOf(`@gmail.com`) == -1) && (mail.value.indexOf(`@hotmail.com`) == -1) && (mail.value.indexOf(`@outlook.com`) == -1) && (mail.value.indexOf(`@yahoo.com`) == -1))) {
		mail.value = `Enter valide email address (gmail,hotmail,outlook,yahoo).`;
		mail.style.color = `red`;
		xx = 0;
	}
	if (xx == 1) {
		window.location.assign(`Submit.php`);
	}
}

function clear() {
	this.value = ``;
	this.style.color = `black`;
}

function clear1() {
	zadatak.value = ``;
	mail.value = ``;
	zadatak.style.color = `black`;
	mail.style.color = `black`;
}