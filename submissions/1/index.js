const projects = [
	{ id: 1, name: 'Option 1', probability: 0.3 },
	{ id: 2, name: 'Option 2', probability: 0.5 },
	{ id: 3, name: 'Option 3', probability: 0.15 },
	{ id: 4, name: 'Option 4', probability: 0.05 }
]

function getRandom(){
    const randomNum = Math.random();
    if(randomNum < 0.3) return 1;  
    else if(randomNum < 0.8) return 2; 
    else if(randomNum < 0.95) return 3;
    else return 4; 
}

const randomFunc = (arr) => {
    const result = {}

    for (let i = 0; i < 500; i++) {
        const randomNum = getRandom()
        if(result[`ID ${randomNum}`]) {
            result[`ID ${randomNum}`]++
        } else {
            result[`ID ${randomNum}`] = 1
        }
    }
    return result
}

console.log(randomFunc(projects))