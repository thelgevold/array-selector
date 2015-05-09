import {testHelper} from './test-helper';
import {_select} from '../source/select';

describe('All', () => {

    let $select = new _select();
let helper = new testHelper();
let items = helper.getItems();

it('should return true when all exist', function(){
    var any = $select.from(items).all(i => i.price > 10);

    expect(any).toBe(true);
});

it('should return false when not all exist', function(){
    var any = $select.from(items).all(i => i.price > 1000);

    expect(any).toBe(false);
});

});