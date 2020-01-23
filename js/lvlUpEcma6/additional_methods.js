// #object-assign
// this it's not merge, it overwrites all matching properties and add those who are missing
var obj1 = {
  skills: {
    running: true
  }
};
var obj2 = {
  name: "bob",
  skills: {
    swimming: true
  }
};
var obj3 = {
  skills: {
    diving: true
  },
  type: 10
};

// es5
Object.keys(obj2).forEach(function(key) {
  obj1[key] = obj2[key];
});

// es6

Object.assign(obj3, obj2);

obj1;
obj3;


// #array-find

var arr = [1, 20, 5, 10];

// es5
let results = arr.filter(function(number){
  return number > 10;
})
results[0];

// es6
results = arr.find(function(number){
  return number > 10;
})
results;

// #array-find-index
results = arr.findIndex(function(number){
  return number > 10;
})
results;