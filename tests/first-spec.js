import {testHelper} from './test-helper';
import {_select} from '../source/select';

describe('select-first', () => {

    let $select = new _select();
    let helper = new testHelper();
    let people = helper.getPeople()

    it('should return the first person1', () => {

       var person = $select.from(people).first(p => p.age === 44);

       expect(person.firstName).toBe('Peter');

    });

    it('should return the first person2', () => {

        var person = $select.from(people).first();

        expect(person.firstName).toBe('Joe');

    });

    it('should return the first person1', () => {

        var person = $select.from(people).first(p => p.age > 10);

        expect(person.firstName).toBe('Joe');

    });

    it('should return undefined', () => {

        var person = $select.from([]).first(p => p.age === 44);

        expect(person).toBeUndefined();

    });
});