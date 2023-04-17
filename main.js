//Task 1

// var arr = [32,25,85,89,45,76,7,41,2,12]
// arr.forEach(elem=>console.log(elem))
// console.log(Math.max(...arr));
// arr.push(15);
// arr.shift()
// arr.sort((a,b)=>a-b)
// arr.splice(3,0,43)
// arr.slice(3)
// console.log(arr.slice(3))
// arr.forEach(elem=>{
//     if(elem>40){
//         console.log(elem)
//     }
// })



// Task 2

// let getStudentNames=[
//     {name:"Steven"},
//     {name:"Mike"},
//     {name:"John"},
// ]
// function getNames(students){
//     let newNames=students.map(student=>student.name)
//     return newNames
// }
// console.log(getNames(getStudentNames));


//Task 3

// function checkFactors(array, number) {
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (number % element !== 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(checkFactors([2, 3, 4, 5], 12));


//Task 4

// function evenFunc(low,high) {
//     let arr=[]
//     for (let i = low; i<=high; i++) {
//        arr.push(i)
        
//     }
//     return arr
// }
// console.log(evenFunc());



/////


// Array-i string-e cheviren funksiya yazmaq


// function CustomToString(arr){
//     let string =""
//     for(let i=0; i< arr.length; i++){
//         string=string + arr[i]+ ", ";
//     }
//     return string;
// }
// var arr = [32,25,85,89,45,76,7,41,2,12]

// console.log(CustomToString(arr))



// Funksiya sozde her herfden nece dene varsa cixarsin 
// console. Mes: "Hello" -> H-1, e-1, l-2, o-1


// function LetterCount(word){
//     let result = {}
//     for(let i= 0; i< word.length; i++){
//         if(result[word[i]]){
//             result[word[i]]++
//         }else{
//             result[word[i]] = 1
//         }
//     }
//     return(result)
// }

// console.log(LetterCount("aaakjg"))


// Funksiya array qebul edir ve hemin array-in ichinde olan tekrarlanan
// elementleri silir ve yeni array qaytarir
// Mes: [1, 2, 2, 4, 1, 5] => [1, 2, 4, 5]


function MyFunc(arr){
    let res = []
    for(let i = 0; i< arr.length; i++){
        let needToAdd = true;
        for(let k = i-1; k>=0; k--){
            if(arr[i]== arr[k]){
                needToAdd = false
            }
        }
        if(needToAdd){
            res.push(arr[i])
        }
    }
    return res;
}

console.log(MyFunc([1, 2, 2, 4, 1, 5, 7, 7]))