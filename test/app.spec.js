import { doSomething } from '../lib/app.js';
import tap from 'tap';
import sinon from 'sinon';
import * as db from '../lib/db.js'
import 'rewiremock';

const {plugins} = rewiremock;
rewiremock.overrideEntryPoint(module);
addPlugin(plugins.relative);
addPlugin(plugins.usedByDefault);
rewiremock.enable();
const mockDB = {'value': 'Swankey'}
rewiremock('../lib/db.js').with({
  db: sinon.stub().resolves(mockDB)
});

tap.test('Should mock db value', (t) => {
    doSomething().then(result => {
        console.log(result)
        t.equal(result, 'Hankey Swankey');
        t.end();
    }).catch(e => t.fail(e));
});
