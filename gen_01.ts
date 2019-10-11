class Person<F,L> 
{
    private firstname : F;
    private lastname : L ;

    constructor(first : F , last : L)
    {
        this.firstname = first ;
        this.lastname = last ;
    }


    getfirst():F {
        return this.firstname;
    }

    getlast():L {
        return this.lastname;
    }

}

let obj = new Person<string,string>('Yash','Raj');
console.log(obj.getfirst());
console.log(obj.getlast());
console.log(obj);


