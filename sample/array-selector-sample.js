import {_select} from '../source/select';

 class sample{

    constructor(){

    }

    getResults(){
        let $select = new _select();
        let res = $select.from([1,2,3]).where(a => a === 3 || a === 1);
        console.log(res);
    }
}

var s = new sample();
s.getResults();