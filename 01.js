let array1 = [2,5,7,9,12,6]
let array2 = [4,6,7,9,18,8]

let array3 = []

for(let i = 0; i < array1.length; i++){
    for(j = 0; j < array2.length; j++){
        if(array1[i] === array2[j]){
            array3.push(array1[i])
        }
    }
}

console.log(array3)