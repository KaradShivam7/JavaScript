

/**
 * Object Destructuring.
 */
let Student1={
    name1:"abc",
    email1:"abc@gmail.com",
    phone1:"+9111223344",
    city1:"Mumbai",
    divisons1:["abc","cde","efg"]
}

let{email1,name1,phone1,city1="pune",divisons1}=Student;


console.log(phone);
console.log(Student);
console.log(city);






/**
 * Object Destructuring.
 */
let Student={
    name:"abc",
    email:"abc@gmail.com",
    phone:"+9111223344",
    city:"Mumbai",
    divisons:["abc","cde","efg"]
}

let{email,name,phone,city="pune",divisons}=Student;


console.log(phone);
console.log(Student);
console.log(city);



let[a,b,c]=divisons;
console.log(a);
