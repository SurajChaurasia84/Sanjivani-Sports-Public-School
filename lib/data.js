import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'data');

export async function getData(fileName) {
  const filePath = path.join(dataDirectory, `${fileName}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}
