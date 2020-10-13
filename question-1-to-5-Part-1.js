// Question 1: Create an Array from 0...100 without using traditional For-loop

let array = Array(101).fill(1).map(item = (val , index) => index);
console.log("array of 0 to 100 ");
console.log(array);

// Question 2: Create an Array of only even numbers from the above array

let evenArray = array.filter( val => val % 2 == 0);

console.log("array of even numbers");

console.log(evenArray);

// Create a function that returns a Promise which returns the 
// square of only even numbers and 
// throws an error if an odd number is passed

function getEvenSquare( a ){
	return new Promise((resolve , reject)=>{
		if( a % 2 == 0){
			return resolve( a * a );
		}
		else{
			return reject( a + " is ODD " );
		}
	});
}

getEvenSquare(4)
.then(result=>{
	console.log("calling Promise 'resolve' for get even number squre and error for odd number");

	console.log(result);
})
.catch(err=>{
	console.log("calling Promise 'reject' for get even number squre and error for odd number");

	console.log(err);
})

// Question 3: create an array of even squares using the previous array

console.log("array of even squares");

let evenSqureArray = array.filter( val => val % 2 == 0 ).map( val => val * val );

console.log(evenSqureArray);


// Question 4: Sum of all the squares from the above array of Even Squares

var sum = evenSqureArray.reduce(function( sum , value ){
        return sum + value;
    }, 0);

console.log("Sum of all the squares from the above array of Even Squares");
//- 0 is value of initial value of sum
console.log(sum);





