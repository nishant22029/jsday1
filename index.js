// arthimatic operator
let a=prompt("enter the numner 1")

let b=prompt("enter the number 2")
let add=parseInt(a)+parseInt(b);
let sub=a-b;
let mul=a*b;
let div=a/b;
let rem=a%b;

console.log("addition="+add);
console.log("subtraction="+sub);
console.log("multiplication="+mul);
console.log("divison="+div);
console.log("remainder="+rem);
document.write("addition="+add+"\t subtraction="+"\t"+sub+"\t multiplication="+"\t"+mul+"\t"+"\tdivision="+"\t"+div+"\tremainder="+"\t"+rem)

///////////////////////////////
// relational operator
if(a<b)
   console.log("a is less than b")
else if(a>b)
    console.log("a is greater than b")
else
    console.log("a is equal to b")
    //////////////////////////////logical operator
if(a>0 && a<100)
    console.log("a is a natural number but less then 100")


    //////increment &decrement operator
console.log(++a);
console.log(b++);
console.log(a--);
console.log(--a);

////ternary operator

let rs=a>b?a:b;
console.log("greater number b/w a & b"+rs)

//////assingmnet operator////
a+=b;
console.log(a);
a-=b;
console.log(a);


