import {testHelper} from './test-helper';
import {_select} from '../source/select';

describe('select-where-equal-operator', () => {

    let $select = new _select();
    let helper = new testHelper();
    let people = helper.getPeople();

    it('should take two elements', () => {
        let res = $select.from(people).where(p => p.age > 10).take(2);

        expect(res.length).toBe(2);
        expect(res[0].firstName).toBe('Joe');
        expect(res[1].firstName).toBe('Jane');
    });

    it('should take three elements', () => {
        let res = $select.from(people).where(p => p.age > 10).take(1000);

        expect(res.length).toBe(3);
        expect(res[0].firstName).toBe('Joe');
        expect(res[1].firstName).toBe('Jane');
        expect(res[2].firstName).toBe('Peter');
    });

});