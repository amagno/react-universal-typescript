import * as fs from 'fs';
import * as path from 'path';
export const makeDocument = (body: string, title?: string): string  => {
  const html = fs.readFileSync(path.resolve('public', 'index.html')).toString();

  return html
    // .replace('{{state}}', injectState(state))
    .replace('{{title}}', title)
    .replace('{{body}}', body);
    // .replace('{{client}}', client)
  
};