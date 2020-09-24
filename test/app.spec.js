import { doSomething } from '../lib/app.js';
import test from 'jest';
import * as db from '../lib/db.js'

const mockDB = {'value': 'Swankey'}
jest.mock('../lib/db.js',() => ({
    loadDB: name => new Promise((resolve, reject) => resolve(mockDB))
}));

it('should mock the DB', () => {
    expect.assertions(1);
    return expect(doSomething()).resolves.toEqual('Hankey Swankey');
});
