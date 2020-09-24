import { doSomething } from '../lib/app.js';
import 'jest';

beforeEach(() => {
  jest.resetModules();
});

it('should work with original db', () => {
    expect.assertions(1);
    return expect(doSomething()).resolves.toEqual('Hankey Pankey');
});

it('should mock the DB', () => {
    const mockDB = {'value': 'Swankey'}
    jest.doMock('../lib/db.js',() => {
        return {
            __esModule: true,
        loadDB : name => new Promise((resolve, reject) => resolve(mockDB))
        }
    });
    expect.assertions(1);
    return import('../lib/app.js').then(app => expect(app.doSomething()).resolves.toEqual('Hankey Swankey'));
});
