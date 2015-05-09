import {_where} from './where';

export class _select{

    from(list){
        return new _where(list);
    }


}