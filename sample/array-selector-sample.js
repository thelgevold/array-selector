import {_select} from '../source/select';

 class sample{

    getResults(){
        let $select = new _select();
        let res = $select.from([1,2,3]).where(a => a === 3 || a === 1).toArray();
        console.log(res);
    }
}

var s = new sample();
s.getResults();