import {_query} from './query';

export class _select{

    from(list){
        return new _query(list);
    }


}