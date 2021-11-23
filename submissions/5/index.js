// Variables declared using 'let' keyword are block scoped while 'var' are function scoped. A new variable is created in each iteration and 'setTimeout' function is called with new variable. 

for (let i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}