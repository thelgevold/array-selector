import {testHelper} from './test-helper';
import {_select} from '../source/select';

describe('select-where-equal-operator', () => {

    let $select = new _select();
    let helper = new testHelper();
    let people = helper.getPeople();

    it('should find one element', () => {
        let res = $select.from(people).where(p => p.age > 40);

        expect(res.length).toBe(1);
        expect(res[0].firstName).toBe('Peter');
    });
});