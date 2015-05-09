export class _queryResult{

    constructor(list){
        this.list = list;
    }

    toArray(){
        return this.list;
    }

    take(n){
        return this.list.slice(0, n);
    }

}