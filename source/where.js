export class _where{

    constructor(list){
        this.list = list;
    }

    where(expr){

        var res = [];
        this.list.map(i => {

            if(expr(i) === true){
                res.push(i);
            }
        });

        return res;
    }

    first(expr){
        this.list.map(i => {

            if(expr(i) === true){
                return i;
            }
        });
    }


}