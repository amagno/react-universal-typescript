import * as colors from 'colors';

const now: string = new Date().toLocaleString();
export const info = (message: string) => {
    
    console.log(`${colors.yellow(`[INFO] | [${now}]`)} : ${colors.green(message)}`);
};