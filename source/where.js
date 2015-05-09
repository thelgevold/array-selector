export class _where{

    constructor(list){
        this.list = list;
    }

    where(expr){

        if(!this.list){
            return [];
        }

        var res = [];
        this.list.map(i => {

            if(expr(i) === true){
                res.push(i);
            }
        });

        return res;
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