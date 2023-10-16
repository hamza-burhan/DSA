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


// !Find Index
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

// !indexOf(value)
//take the element of the array and return its index
//not itterative
// !find(ele,index,array)
// this return a index of the element
//itterative method
// !findLastIndex(elem,index)
//itterate reversly and return index


// !slice(start,end)
//it will cut the array from start to end
// data = [1,2,3,4,5,6]
// const newSliceArr = data.slice(1,4)
// document.getElementById("slice").innerHTML = JSON.stringify(newSliceArr)



// !splice(start index, delete count, ..insert items)
// remove or insert or replace elements in an array at specific index
// return removed elements
// mutate original array
// it include the start point as well
// data =['item1', 'item2','item3','item4','item5']
//insert
// data.splice(1,0,'newitem1','newitem2')
//delete
// data.splice(1,2)
//replace
// data.splice(1,2,'newitem1','newitem2')
//rotate an array
// let poition = 3
// const removeditems = data.splice(0,poition+1)
// data.splice(0,0,removeditems)
// document.getElementById("splice").innerHTML = JSON.stringify(data)



// ! flatmap(callback(ele,index,arr))
//it will map on the array and flatten the array
//call back return the array so we can do calculation on every element
// return new array
// data = [12,11,21,1223]
//test
// const result = data.flatMap((ele,index,arr) => {
//     return [ele,ele+ele]
// })
// Double and Square
// const result = data.flatMap((ele,index,array) => {
//     return [ele*ele]
// }).concat(data.flatMap((ele,index,array) => {
//     return [ele+ele]
// }))
// document.getElementById("flatmap").innerHTML = JSON.stringify(result)


// !split(seperator)
//will split the string and convert to array

// !join(seperator)
//will join the array into one string

// !includes(value,start search from)
//will search the array or string and return boolean base on the value provided

// !some(callback(ele,index,arr))
//some() is particularly useful when you need to quickly determine if a certain condition is met by any element
//in an array, without having to iterate through the entire array manually.
//return true or false if one element in the array pass the test of callback

// !every(callback(ele,index,array))
//every() is particularly useful when you need to quickly determine if a certain condition is met by every element
//in an array, without having to iterate through the entire array manually.

// ! sort(callback(a,b))
//without comparison function it will sort the array in accesnding order
//with comparison function it should return negetive or positive or zero
// debugger
// data = [10,9,8,7,6,5,4,3]
// const result = data.sort((a,b) => {
//     return a-b
// })
// console.log(result)
// document.getElementById("sort").innerHTML = JSON.stringify(data)




//Searching Algorithms

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

// Binary Search Recursive approach
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

