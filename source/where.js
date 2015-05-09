export class _where{

    constructor(list){
        this.list = list;
    }

    where(expr){

        if(!this.list){
            return [];
        }

        return this.list.filter(i => {
            return expr(i);
        });

    }

    any(expr){

        var found = false;
        this.list.some(i => {

            if(expr(i) === true){
                found = true;
                return false;
            }
        });

        return found;
    }

    all(expr){

        var all = true;
        this.list.some(i => {

            if(expr(i) === false){
                all = false;
            }
        });

        return all;
    }

    first(expr){

        if(!this.list || this.list.length === 0){
            return undefined;
        }

        let first;

        if(!expr){
            return this.list[0];
        }

        this.list.some(i => {

            if(expr(i) === true){
                first = i;
                return true;
            }
        });

        return first;
    }


}