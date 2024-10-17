// console.log(null > 0);
// console.log(null  == 0);//because the euality operator doesnt treat the null as 0 
// console.log(null >= 0); //because the comparison operator treats the null as 0. So the (null) 0>=0

// 7 datatypes (call by value)Primitive
//String, Number, Boolean, Null, Undefined, symbol(unique),BigInt

//Non primitive(reference type)
// Arrays, Objects, Functions

const id  = Symbol('123');
const newId  = Symbol(123)
// console.log(id == newId);
// console.log(id);
// console.log(newId);


/*++++++++++++++++++++++++++++++++++++++++++++++++++++
Memory Types
  Stack/Heap 

  Stack(Primitive)    Heap(Non Primitive) 


*/

let first = 123
let second = first;
second = 456                    //Call by value method type (Stack Storage)
// console.log(first);
// console.log(second);

let one = {
    id:"Jaison",
    name:"Punk",
    number:78458,
}                           //Call by reference method type(Heap)
let two = one
two.id = "Raw"
// console.log(one);
// console.log(two.id);

//Tom declare a string

const name  = "Jaison"

const newName = new String("Jaison is a programmer")
let splitted  = newName.split("")
console.log(splitted[5])