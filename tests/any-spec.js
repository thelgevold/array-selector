import {testHelper} from './test-helper';
import {_select} from '../source/select';

describe('Any', () => {

    let $select = new _select();
    let helper = new testHelper();
    let items = helper.getItems();

    it('should return true when one exists', function(){
        var any = $select.from(items).any(i => i.price === 155);

        expect(any).toBe(true);
    });

    it('should return false when none exists', function(){
        var any = $select.from(items).any(i => i.price === 1000);

        expect(any).toBe(false);
    });

});