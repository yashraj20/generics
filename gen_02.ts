class List<T> 
{
    private data:T[];

    constructor(...elements:T[])
    {
        this.data = elements;
    }

    add(...t : T[]) {
       return this.data.push(...t);
    }

    remove(t:T) {
        let index = this.data.indexOf(t);
        if(index > -1) {
          this.data.splice(index,1);
        }
    }


}

// adding 

let list = new List<number>(11,12,13);
console.log(list.add(144,78,123));
console.log(list);


let lis = new List<string>('yash','raj');
console.log(lis.add('pollam'));
console.log(lis);


// removing 

console.log(list.remove(78));
console.log(list);