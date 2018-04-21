window.onload = function (params) {
	fetch('https://www.ipip5.com/today/api.php?type=json')
		.then(res => res.json())
		.then(res => {
			if (res.result.length > 0) {
				var li = '';
				res.result.map(function (k ,v) {
					li += `<li><label>${k.year}</label><span>${k.title}</span></li>`;
				})
				document.querySelector("#itemList").innerHTML = li
			}
		})
}