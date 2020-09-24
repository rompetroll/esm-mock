import { doSomething } from '../lib/app.js';
import tap from 'tap';
import sinon from 'sinon';
import * as db from '../lib/db.js'

tap.test('Should mock db value', (t) => {
    const mockDB = {'value': 'Swankey'}
    const dbstub = sinon.stub(db, 'loadDB').resolves(mockDB);

    doSomething().then(result => {
        console.log(result)
        t.equal(result, 'Hankey Swankey');
        t.end();
    }).catch(e => t.fail(e));
});
