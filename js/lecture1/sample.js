function hoge2(){
	if (confirm('1月は別名「睦月」。同じように6月は「文月である」')) {
		alert('はずれ！正解は水無月');
	} else {
		alert('正解');
	}
}
function hoge3() {
	var answer = confirm('送信しますか？');

	/* ここでしばらく待つ */
	window.alert('しばらくお待ちください...');

	if (answer) {
		alert('送信しました') ;
	} else　{
		alert('キャンセルしました');
	}
}
function hoge4() {
	document.write('<h2>1年を365日とした場合。。。</h2>')
	document.write('<p>1年は' + (365*24) + '時間です</p>')
}
function hoge5 () {
	var now = new Date();
	var hour = now.getHours();

	if (hour < 12) {
		window.alert('今は午前' + hour +'時です');
	} else {
		window.alert('今は午後' + hour +'時です');
	}
}
function hoge6 () {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var seconds = now.getSeconds();

	if((hour == 9 && minute == 30 && seconds == 00 ) || (hour == 10 && minute == 00 && seconds == 45)) {
		window.alert('起きる時間です');
	}
}

function hoge7 () {
	var  i = 2;
	while (i<=20) {
		document.write('<option value ="' + i + '">' + i + '歳</option>');
		i += 2;
	}
}
function hoge8 () {
	for (var i = 2; i <= 20; i += 2) {
		document.write('<option value ="' + i + '">' + i+ '歳</option>');
	}
}

function hoge9 () {
	var menus = new Array('ホーム','会社情報','製品情報','お問い合わせ');
	for (var i=0; i<menus.length; i++) {
		document.write('<li><a href ="' + menus[i] + '">' + menus[i] + '</a></li>');
	}
 }

function hoge10 () {
	var menus = {
		'home.html':'ホーム',
		'company.html':'会社情報',
		'product.html':'製品情報',
		'faq.html':'お問い合わせ'
	};
	for (var m in menus) {
		document.write('<li><a href ="' + m + '">' + menus[m] + '</a></li>');
	}
}

function numberFormat (source) {
	var s = new String(source);
	var ret = '';

	for (var i = s.length -3; i > 0; i -= 3) {
		ret = ',' + s.substr(i,3) + ret;
	}
	ret = s.substr(0, i+3) + ret;

	return ret;
}



