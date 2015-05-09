export class _where{

    constructor(list){
        this.list = list;
    }

    groupBy(expr){
        var res = {};
        this.list.map(i => {

            (res[expr(i).toString()] || []).push(i);

        });
    }

    where(expr){

        if(!this.list){
            return [];
        }

        return this.list.filter(i => {

            return expr(i);
        });

    }

    first(expr){

        if(!this.list || this.list.length === 0){
            return undefined;
        }

        let first;

        if(!expr){
            return this.list[0];
        }

        this.list.map(i => {

            if(expr(i) === true){
                first = i;
            }
        });

        return first;
    }


}