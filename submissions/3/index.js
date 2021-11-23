function add(num1 , num2){
    if(num2 !== undefined){
        return num1 + num2;
    }else{
        return function(num2){ 
            return num1 + num2; 
        } 
    }
}

console.log(add(2)(8))