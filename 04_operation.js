let value = 3;
let negvalue = -value;
console.log(negvalue);

/*
"1"+2 -> 12
1+"2" -> 12
1+1+"2" -> 22
"2"+1+1 -> 211
2+8+"5"+2+1 -> 10521
*/

console.log(2+8+"5"+2+1)
console.log(1+1+true+1) //output : 4

console.table(["2">1, "2"<1, "2"==2, "2"===2]);
console.table([null>0, null<0, null==0, null>=0, null<=0])
console.table([undefined<0, undefined>0, undefined==0, undefined===0, undefined<=0, undefined>=0]); // all false