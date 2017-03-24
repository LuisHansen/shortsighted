document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('range').addEventListener('input', function (event) {
		update(event);
	});
	function remove() {
		chrome.storage.sync.get('disabled', function(value) {
			let disable = false;
			if (value) {
				disable = !value;
			}
			chrome.storage.sync.set({'disabled': disable });
		})
	}

	function update(event) {
		document.getElementById('value').innerHTML = Number(event.target.value).toPrecision(3);
		localStorage.setItem({'blur': event.target.value });
	}

	function run() {
		console.log("init");
		let value = localStorage.getItem('blur');
		value = value ? value : "0.5";
		console.log(document.getElementsByTagName('body'));
		document.getElementsByTagName('body')[0].style.filter = "blur(" + value + "px)";
		console.log("blur(" + value + "px)");
	}

	run();   
});