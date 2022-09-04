var obj = {x: 1, y: 2};
var arr = [1, 'what', obj];
console.log('Array includes 1:',arr.includes(1));
console.log('Array includes \'what\':', arr.includes('what'));
console.log('Array includes obj:', arr.includes(obj));
console.log('Array includes 3:', arr.includes(3));