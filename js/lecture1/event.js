document.getElementById('btnClose').onclick = function() {
	if (confirm('とじてよろしいですか？')) {
		window.close();
	} else {
		alert('閉じるのを中止しました');
	}
}

document.getElementById('age').onchange = function () {
	var age = document.getElementById('age').value;
	if (age === '10') {
		alert('10歳以下の方は半額です')
	}
} 