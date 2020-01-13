
// a generator property attached to an object
const obj = {
    * myGenerator(){
        yield* [1,2,3] ;
        yield "hello" ;

    }
}


const iter = obj.myGenerator();

iter;



console.log( [...iter] )
//console.log( iter.next() )
//console.log( iter.next() )
//console.log( iter.next() )
//console.log( iter.next() )
//console.log( iter.next() )

