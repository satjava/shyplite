let abc = () => {
let arr = Array.apply(0, Array(30))
.map(function(val, index) { 
	return index;
});
let err = 0
let a = new Promise((resolve, reject) => {
arr = arr.map(val => {
  if (val% 2== 0) {
    return (val * val)
  } else  {
    return false
  }
});
resolve(arr)
})
a.then((val) => {
  let errcount = arr.filter(i => i == false).length
  let resultArray = arr.filter(i => i != false)
  console.log('Number of errors' , errcount);
  console.log('The resultant array', resultArray)
  console.log('Number of objects in the resultant array', val.length)
})
}

abc();