interface Student{
 name:string,
 age:number
}
/**
 * 2
 */
interface Student2{
 readonly name:string,
 readonly age:number
}
/**
 * 2
 */
type Student3 = Readonly<Student>

function makeStudent(name:string,age:number):Student2{
 return {
  name,age
 }
}

const Ajay = makeStudent("Ajay",22)

// Ajay.name ="Pathak" //it is allowed
// Ajay.name = "" // not allowed


/**
 * * ARRAY IMMUTABILITY
 */


function makeCoordinate(x:number,y:number):readonly[number,number]{
 return [x,y]
}
const c1= makeCoordinate(1,2)
// c1[0]=3  //// NOt Allowed

////////////////////////////OR/////////////////////////////////


const reallyConst = [1,2,3] as const
// reallyConst[0]=9 // NOt allowed