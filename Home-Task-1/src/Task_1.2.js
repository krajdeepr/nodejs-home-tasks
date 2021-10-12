const path = require('path');
const {writeFile} = require('fs/promises');
const {pipeline} = require('stream');
const {createWriteStream, createReadStream, existsSync} = require('fs');
const csv = require('csvtojson');

const convert = async ({ input, output }) => {
	if (!existsSync(input)) {
		await writeFile(output);
	}
	pipeline(createReadStream(input), csv(), createWriteStream(output), (error) => {
		if (error) {
			console.error(error);
		} else {
			console.log('Success');
		}
	});
};

convert({
	input: path.resolve(__dirname, '../assets/nodejs19-hw1-ex1.csv'),
	output: path.resolve(__dirname, 'nodejs_hw1_ex2.txt')
});
