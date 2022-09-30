const target = {a:1,b:2};
const source = {c:3,d:4};

const returnedTarget = Object.assign(target,source);

console.log(target);

console.log('target', target);
console.log('source', source);
console.log('returned', returnedTarget);

