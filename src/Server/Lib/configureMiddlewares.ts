import { BootOptionsInterface } from '../ServerInterfaces';

export const configureMiddlewares = (options: BootOptionsInterface): BootOptionsInterface => {
  options.middlewares.forEach(m => {
    if (m.dev && options.isDev) {
      if (m.path) {
        return options.app.use(m.path, m.use);
      }
      return options.app.use(m.use);      
    }
    if (!m.dev) {
      if (m.path) {
        return options.app.use(m.path, m.use);
      }
      return options.app.use(m.use);
    }
  });
  return options;
};