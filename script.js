//1
convertFahrToCelcius = (F) => {
   if(Array.isArray(F) && typeof(F) === "object"){
       let output = JSON.stringify(F)
       console.log(`${output} is not a valid number but a/an array.`)
   }else if(!Array.isArray(F) && typeof(F) === "object"){
        let value = JSON.stringify(F)
        console.log (`${(value)} is not a valid number but a/an object.`)
   }else{
   let val = Number(F)
      const ans = ((val) - 32) * 5/9; 
      console.log (`${ans.toFixed(4)}`)  
  } 
}

convertFahrToCelcius(0)
convertFahrToCelcius("0")
convertFahrToCelcius([1,2,3])
convertFahrToCelcius({temp: 0})

//2
checkYuGiOh=function(n){
    if(! +n){
       console.log (`invalid parameter: ${JSON.stringify(n)}`);
     return;
    }
    let arr=[];
    for(let i=1; i <= n; i++){
        arr.push(i);
    }
   arr.forEach(function(value, index, array){
       if ((value % 2 === 0)  && (value % 3 === 0) && (value % 5 === 0)){
           array[index] = "yu-gi-oh";
       } else if ((value % 2 === 0) && (value % 3 === 0)){
           array[index] = "yu-gi";
       } else if ((value % 2=== 0) && (value % 5 === 0)) {
           array[index] = "yu-oh";
       }else if ((value % 3 === 0) && (value % 5 === 0)) {
           array[index] = "gi-oh";
       }else if (value % 2 === 0) {
           array[index] = "yu";
       }else if (value % 3 === 0) {
           array[index] = "gi";
       }else if (value % 5 === 0) {
           array[index] = "oh";
       }
       
       
       
    });
    console.log (arr);
}
checkYuGiOh(10);
checkYuGiOh("5")
checkYuGiOh("fizzbuzz is meh");