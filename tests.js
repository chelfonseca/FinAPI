const a1 = [
    {key1 : 1, key2 : 2,},
    {key1 : 11, key2 : 22},
    {key1 : 111, key2 : 222,},
]
console.log(a1);

const obj = a1[0];

console.log(obj);

obj.key1 = 333;

console.log(a1);
console.log(obj);

const a2 = new a1;
console.log(a2)
console.log(obj2)

const obj2 = a2[0]

obj2.key1 = 4444;

console.log(a2)
console.log(obj2)


