require("./main.scss");

$(function() {
	new Main();
});

class Main {
	constructor() {
		this.render()
		console.log( "main start." );
	}
	render() {
		new SampleAreaBasic();
	}
}

class SampleAreaBasic {
	constructor() {
		var area = $(".sample-area.basic");
		area.html(`
			<div>delkeyテスト</div>
			<div><a href="/">LINK1</a> on focus to del key press.</div>
			<div><a href="/">LINK2</a> on focus to del key press.</div>
			<pre></pre>
		`);
		var target = area[0]
		Mousetrap(target).bind(['backspace','del'], function(e) {
			e.preventDefault();
			console.log( e );
			area.find("pre").append(e.target.outerHTML);
		});
	}
}
