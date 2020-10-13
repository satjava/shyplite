// Q1: Create a template string of a button HTML Element. Save the title
// for the button in a separate var and use it in the button correctly.

let buttonTitle = "This is used to save value in DB";

let btn = `<button title="${buttonTitle}">Save</button>`;
console.log(btn);

// Q2: Create a function that returns a list element (<li>) HTML 
// use this function to create an ordered list HTML structure of numbers from 
// 1-30 without breaking the template string invocation i.e. usage of += is disallowed.

function htmlList(number){
	let listarray = Array(number).fill(1)
	.map( function( val , index ){

		return index;		

	});

	return listarray.map( val=>'<li>'+val+'</li>');
}

let html = "<ul>"+htmlList(31).join("\n")+"</ul>";
console.log(html);

// Q3: Now only print the even numbers. Again, breaking the template string
// invocation is disallowed

function htmlEvenList(number){
	let listarray = Array(number).fill(1)
	.map( function( val , index ){

		return index;		

	});


	return listarray.filter( val => val % 2 == 0)
	.map( val=>'<li>'+val+'</li>');
}

let evenhtml = "<ul>"+htmlEvenList(31).join("\n")+"</ul>";
console.log(evenhtml);