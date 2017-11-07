import 'jest';
import * as React from 'react';
import { Routes } from 'universal-router';
import Router from '../Router';
import { renderToStaticMarkup } from 'react-dom/server';
import { RouteParamsInterface } from '../Interfaces';
interface TestContext {
  text?: string;
}
const TestComponent = () => (
  <div>
    <h1>Testing component</h1>
  </div>
);
describe('test router', () => {
  it('test init simple route [/] | [/home/test]', async () => {
    const routes = [
      {
        path: '/',
        action: () => (
          <div>
            <h1>Hello World</h1>
          </div>
        )
      },
      {
        path: '/home/test',
        action: () => (
          <div>
            <h1>Hello World 2!</h1>
          </div>
        )
      }
    ];
    const router = new Router(routes);
    const data1 = await router.resolve({
      pathname: '/'
    });
    const data2 = await router.resolve({
      pathname: '/home/test'
    });
    expect(data1).toMatchSnapshot();
    expect(data2).toMatchSnapshot();
  });

  it('test init route with context params [text: hello world with params!]', async () => {
    const routes = [
      {
        path: '/',
        action: (params: RouteParamsInterface<TestContext>) => (
          <div>
            <h1>{params.context.text}</h1>
          </div>
        )
      }
    ];
    const router = new Router(routes);
    const data = await router.resolve({
      pathname: '/',
      context: {
        text: 'hello world with params!'
      }
    });
    expect(data).toMatchSnapshot();
  });
  it('test add 2 routes [/] | [/another]', async () => {
    const AnotherComponent = () => (
      <h1>Test</h1>
    );
    const router = new Router();    
    router
      .add('/', TestComponent)
      .add('/another', AnotherComponent);
    const data1 = await router.resolve({
      pathname: '/'
    });
    const data2 = await router.resolve({
      pathname: '/another'
    });
    expect(data1).toMatchSnapshot();
    expect(data2).toMatchSnapshot();
  });
  it('test add route with context data [text: test add with data]', async () => {
    const router = new Router();
    router.add('/', TestComponent);

    const data = await router.resolve({
      pathname: '/',
      context: {
        text: 'test add with data'
      }
    });
    expect(data).toMatchSnapshot();
  });
  it('test route with url param /:user', async () => {
    const router = new Router();
    router.add('/:user', TestComponent);

    const data = await router.resolve({
      pathname: '/testing'
    });

    expect(data).toMatchSnapshot();
  });
  it('test state component', async () => {
    class TestStateCompoent extends React.Component {
      constructor(props: RouteParamsInterface<TestContext>) {
        super(props);
        this.state = {
          acitve: false
        };
      }
    }
    const router = new Router();
    router.add('/', TestStateCompoent);

    const data = await router.resolve<TestContext>({
      pathname: '/',
      context: {
        text: 'hello world componet class!'
      }
    });

    expect(data).toMatchSnapshot();
  });
});