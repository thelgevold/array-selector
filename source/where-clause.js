import {_queryResult} from './query-result.js';

export class _whereClause{

    constructor(list){
        this.list = list;
    }

    filter(expr){

        var res = [];

        if(this.list) {
            this.list.map(i => {

                if(expr(i) === true) {
                    res.push(i);
                }

            });
        }

        return new _queryResult(res);
    }

}