export function powerToPosition(power){
    if(power==0){
        return 0;
    }
    return (((Math.log(power)/Math.log(2))+1)*100);
}

export function arraysToObject(nam,val,lin){

    let result = []

    for(let i=0;i<nam.length;i++){
        result.push({   name:nam[i],
                        value:val[i],
                        link:lin[i]})
    }

    return result
}

export function objectToArray(obj){
    let names = [];
    let values = [];
    let links = [];

    for(let i=0;i<obj.length;i++){
        names.push(obj[i].name);
        values.push(obj[i].value);
        links.push(obj[i].link);
    }

    return [names,values,links];
}