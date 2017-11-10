import * as webpack from 'webpack';
import webpackConfig from '../../../webpack.config';


export const compileWebpack = () => new Promise((resolve, reject) => {
  webpack(webpackConfig).run((error, status) => {
    if (error) {
      return reject(error.message);
    }
    return resolve(status.toString());
  });
});