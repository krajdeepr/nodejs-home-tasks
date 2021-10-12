import { resolve } from 'path';
import { writeFile } from 'fs/promises';
import { pipeline } from 'stream';
import { createWriteStream, createReadStream, existsSync } from 'fs';
import csv from 'csvtojson';

const convert = async ({input, output}) => {
	if (!existsSync(input)) {
		await writeFile(output, null);
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
	input: resolve(__dirname, '../assets/nodejs19-hw1-ex1.csv'),
	output: resolve(__dirname, 'nodejs_hw1_ex2_es6.txt')
});
