const revStr = (str) => str.split('').reverse().join('');

process.stdin.on('data', (data) => {
	const output = revStr(data.toString().trim());
	console.log(output);
});
