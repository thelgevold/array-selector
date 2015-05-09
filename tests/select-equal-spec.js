import {testHelper} from './test-helper';
import {_select} from '../source/select';

describe('select-where-equal-operator', () => {

    let $select = new _select();
    let helper = new testHelper();
    let people = helper.getPeople();

   it('should not find element', function(){
       var res = $select.from(people).where(a => a.firstName === 'Tim');
       expect(res.length).toBe(0);
   });

   it('should not find element', function(){
       var res = $select.from(people).where(a => a.firstName !== 'Tim');

       expect(res.length).toBe(3);
       expect(res[0].firstName).toEqual('Joe');
       expect(res[1].firstName).toEqual('Jane');
       expect(res[2].firstName).toEqual('Peter');
   });

   it('should find single element', function(){

       var res = $select.from(people).where(a => a.firstName === 'Joe');

       expect(res.length).toBe(1);
       expect(res[0].firstName).toEqual('Joe');

   });

   it('should find two elements', function(){

        var res = $select.from(people).where(a => a.firstName === 'Joe' || a.firstName === 'Jane');

        expect(res.length).toBe(2);
        expect(res[0].firstName).toEqual('Joe');
        expect(res[1].firstName).toEqual('Jane');

   });


});