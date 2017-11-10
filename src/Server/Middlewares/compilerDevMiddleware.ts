import * as express from 'express';
import { compileWebpack } from '../Lib/compiler';

let compiled = false;

export const compilerDevMiddleware: express.Handler = async (req, res, next) => {
  if (!compiled) {
    try {
      const out = await compileWebpack();
      console.log(out);
      compiled = true;
    } catch(error) {
      console.log(error);
    }
  }
  next();
};