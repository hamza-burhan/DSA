// !Filter Method
// const filterArr = [1,3,5,6,8,95]
// const newarr = filterArr.filter((element, index) => {
//     if(element > 5) return element
// })
// document.getElementById("filter").innerHTML = JSON.stringify(newarr)
// console.log("filterarr",filterArr)


// !Reduce method
// objArray = [
//     {
//         name:'pen',
//         category:'sharp'
//     },
//     {
//         name:'ink',
//         category:'liquid'
//     },
//     {
//         name:'pointer',
//         category:'sharp'
//     }
// ]

// let find = 3
// let count = 0
// let sharpObjArr = []
// data = [2,5,3,345,23,1,3,3]
// const value = objArray.reduce(groupbycat)

// nestedArray = [[1,2],[3,4],[5,6]]
// const flatarray = nestedArray.reduce(flatten,nestedArray[0])
//Max Reducer
// function maxfunction(total, currentElement, currentIndex, arr){
//     if(currentElement > total){
//         return currentElement
//     }else{
//         return total
//     }
// }

//Average Reducer
// function average(total,currentElement,currentIndex,arr){
//     return total + currentElement
// }
// document.getElementById("reduce").innerHTML = JSON.stringify(value/data.length)

//Flatten array Reducer
// debugger;
// function flatten(total,currentElement,currentIndex,arr){
//     total = [...total,...currentElement]
//     return total
// }
// first itteration
// total = [1,2,1,2]
// Second itteration
// total = [1,2,1,2,3,4]
// Third itteration 
// total = [1,2,1,2,3,4,5,6]
// document.getElementById("reduce").innerHTML = JSON.stringify(flatarray)

//Counting Instances
// function counting(total,currentElement,currentIndex,arr){
//     if(currentElement === find){
//         count++;
//         return currentElement
//     }
// }
// document.getElementById("reduce").innerHTML = JSON.stringify(count)

//Grouping Object on the basis of property

// function groupbycat(total,currentElement,currentIndex,arr){
//     if(total.category === currentElement.category){
//         sharpObjArr.push({...total},{...currentElement})
//     }else{
//         return total
//     }
// }
// document.getElementById("reduce").innerHTML = JSON.stringify(sharpObjArr)


// Find Index

data = [1,3,2,4,5,6,6]
stringArr = ['a','aa','aaa','aaaa','aaaaa']
length = 2
const value = data.findIndex(primeNumber)

//Test functions
// function testFunction(currentValue, index, arr){
//     if(currentValue === 6){
//         return true
//     }
//     console.log("current",currentValue)
// }

//Find index of first even number
// function firstEven(currentElement, index, arr){
//     if(currentElement%2 === 0){
//         return index
//     }
// }

//Find the string length that is longer than the given length
// function FindstringLength(currenValue, index, arr){
//     console.log(currenValue)
//     const singleString = currenValue.split('')
//     const stringLength = singleString.length
//     if(stringLength > length) return index
// }

//Prime Number that can only divided by 1 or number itself and give a whole number 
function primeNumber(currentValue,index, arr){
    const number = currentValue / currentValue + 1    
    console.log(typeof number)
}

document.getElementById("findIndexArr").innerHTML = JSON.stringify(data)
document.getElementById("findIndex").innerHTML = value













// !Binary Search itterative approach
// let data = [2,4,6,14,18,19,4,22,45]
// let start = 0
// let end = data.length-1
// let position = undefined
// let find = 4
// for(start;start<=end;){
//     let mid = Math.floor((start+end) / 2)
//     if(data[mid] === find){
//         position = mid
//         break;
//     }else if(data[mid] < find){
//         start = mid + 1
//     }
//     else{
//         end = mid - 1
//     }
// }
// document.getElementById("binary").innerHTML = position

// !Binary Search Recursive approach
// let Rdata = [10,23,43,44,77,78,100]
// let Rstart = 0
// let Rend = Rdata.length-1
// let Rposition = undefined
// let Rfind = 100
// function RecursiveBinary(da,st,en){
//     let mid = Math.floor((st+en)/2)
//     if(da[mid] === Rfind){
//         Rposition = mid
//         return true
//     }else if(da[mid] < Rfind){
//         RecursiveBinary(da,mid+1,en)
//     }else{
//         RecursiveBinary(da,st,mid-1)
//     }
// }
// RecursiveBinary(Rdata,Rstart,Rend)
// document.getElementById("recursive").innerHTML = "Rposition:" + Rposition

// !Linear Search
// let Ldata = [2,4,6,14,18,19,4,22,45]
// let Lfind = 4
// let Lposition = undefined
// for(var i=0; i <= Ldata.length-1;i++){
//     if(Ldata[i] === Lfind){
//         Lposition = i
//     }
// }
// document.getElementById("linear").innerHTML = Lposition



// !Bubble sort
// Bdata = [2,5,4,54,23,32,11]
// let n = data.length
// let i,j
// for(i=0;i<=n;i++){
//     for(j=0;j<=n;j++){
//         if(data[j] > data[j+1]){
//             temp = data[j]
//             data[j] = data[j+1]
//             data[j+1] = temp
//         }
//     }
// }
// let Btext = ''   
// for(i=0;i<n;i++){
//     text += data[i] + ','
// }
// document.getElementById('bubbleSort').innerHTML = '[' +text + ']'
// console.log(data)

