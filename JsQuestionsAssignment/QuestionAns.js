// 1) How do you find the missing number in a given integer array of 1 to 100?

// var arr = [1,2,3,4,6,7,8,9]
// var x = 0

// for(var i = 0; i<arr.length-1; i++)
//   {
//     if (arr[i] + 1 !== arr[i+1] )
//       {
//         x = arr[i]+1
//         console.log(x + " is missing")
//       }
//   }

// -------------------------------------------------------------------------------------------------------

// 2) How do you find the duplicate number on a given integer array?
// var arr = [1,2,3,3,4,5,7,7]
// var duplicateVlaue = []

// arr.sort(function(a,b){return a-b})

// for(var i=0; i<arr.length; i++){
//     if(arr[i] == arr[i+1]){
//         duplicateVlaue.push(arr[i])
//     }
// }
// console.log(duplicateVlaue)

// -------------------------------------------------------------------------------------------------------

// 3) How do you find the largest and smallest number in an unsorted integer array?

// var arr = [2,1,4,3,6,7,8,9]

// console.log("Largest: " + Math.max(...arr))
// console.log("Smallest: " + Math.min(...arr))

// -------------------------------------------------------------------------------------------------------

// 4) How do you find all pairs of an integer array whose sum is equal to a given number?

// var a = [1,2,3,4,5,3,4,0]

// function PairValue(a,findPairOf){
// for(var i=0; i<=a.length-1; i++)
//   {
//     for(var j=i+1; j<=a.length-1; j++)
//       {
//         if( a[i] + a[j] == findPairOf )
//           {
//             console.log("(" + a[i] + "," + a[j] + ")")
            
//           }      }
//   }}

//   PairValue(a, 1)

// -------------------------------------------------------------------------------------------------------

// 5) How do you find duplicate numbers in an array if it contains multiple duplicates?

// var arr = [1,2,3,3,4,5,7,7]
// var duplicateVlaue = []

// arr.sort(function(a,b){return a-b})

// for(var i=0; i<arr.length; i++){
//     if(arr[i] == arr[i+1]){
//         duplicateVlaue.push(arr[i])
//     }
// }
// console.log(duplicateVlaue)

// -------------------------------------------------------------------------------------------------------

// 6) How do you reverse an array in place in JavaScript? In place means you cannot create a new array. 
// You have to update the original array.

// var arr = [1,2,3,3,4,5,7,7]
// arr.reverse()
// console.log(arr)

// -------------------------------------------------------------------------------------------------------

// 7) How do you print duplicate characters from a string?

// var Name = "Hello JavaScript"
// var NameArr = Name.split("")

// NameArr.sort()

// for(var i=0; i<NameArr.length; i++){
// if(NameArr[i] == NameArr[i+1]){
//     console.log(NameArr[i])}
// }

// -------------------------------------------------------------------------------------------------------

// 8) How do you check if two strings are anagrams of each other?

// function checkStringsAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if(len1 !== len2){
//        console.log('Invalid Input');
//        return
//     }
//     let str1 = a.toUpperCase().split('').sort().join('');
//     let str2 = b.toUpperCase().split('').sort().join('');

//     if(str1 === str2){
//        console.log("True");
//     } else { 
//        console.log("False");
//     }
//  }
//  checkStringsAnagram("indiaN","nDiani")


// -------------------------------------------------------------------------------------------------------

// 9) How do you print the first non-repeated character from a string?


// function find_FirstNotRepeatedChar(str) {
//     var arra1 = str.split('');
//     var result = '';
//     var ctr = 0;
   
//     for (var x = 0; x < arra1.length; x++) {
//       ctr = 0;
   
//       for (var y = 0; y < arra1.length; y++) 
//       {
//         if (arra1[x] === arra1[y]) {
//           ctr+= 1;
//         }
//       }
   
//       if (ctr < 2) {
//         result = arra1[x];
//         break;
//       }
//     }
//     return result;
//   }
//   console.log(find_FirstNotRepeatedChar('abacddbec'));
  
// -------------------------------------------------------------------------------------------------------

// 10) How can a given string be reversed using recursion?

// var str = "we are using recursion"
// var str1 = str.split("")

// function recursionFn(str1) {

//     if ( str1.length > 0) {
//         var newStr = []
//         newStr.push(document.write(str1[str1.length-1]))
//         str1.pop()
//         recursionFn(str1)
//         return newStr
//     }
// }
// recursionFn(str1)
// -------------------------------------------------------------------------------------------------------

// 11) How do you check if a string contains only digits?

// function isNumeric(x) {
    
//     return parseInt(x).toString() === x.toString();
// }
// var x = "1x3"
// console.log(isNumeric(x))

// -------------------------------------------------------------------------------------------------------

// 12) How are duplicate characters found in a string?

// var Name = "Hello JavaScript"
// var NameArr = Name.split("")

// NameArr.sort()

// for(var i=0; i<NameArr.length; i++){
// if(NameArr[i] == NameArr[i+1]){
//     console.log(NameArr[i])}
// }

// -------------------------------------------------------------------------------------------------------

// 13) How do you count a number of vowels and consonants in a given string?
// var str = "hello"
// var str1 = str.toUpperCase()

// var vowels = 0;
// var consonants = 0;

// for ( var i =0; i < str1.length ; i++ ){
//     if ( str1[i] == "A" || str1[i] == "E" || str1[i] == "I" || str1[i] == "O" || str1[i] == "U" ) {
//         vowels++
//     } else {
//         consonants++
//     }
// }
// console.log(`Vowels : ${vowels}`)
// console.log(`consonants : ${consonants}`)

// -------------------------------------------------------------------------------------------------------

// 14) How do you count the occurrence of a given character in a string?

// var Name = "HellloJavaScript"
// var O = "l"
// var count = 0

// function occurrence(Name, O){

//     var ToUpper = Name.toUpperCase()
//     var O1 =   O.toUpperCase()

//     for(var i = 0; i < ToUpper.length; i++)
//     {
//         if(ToUpper.charAt(i) == O1)
//         {
//             count++
//         }

//     }

//     console.log(count)
// }
// occurrence(Name, O)

// -------------------------------------------------------------------------------------------------------

// 15) How do you find all permutations of a string?

    // function findPermutations(string){

    //     if (string.length < 2 ){
    //     return string
    //     }
    
    //     var permutationsArray = [] 
        
    //     for (var i = 0; i < string.length; i++){
    //         var char = string[i]
            
    //     var remainingChars = string.slice(0, i) + string.slice(i + 1, string.length) //bc

    
    //     for (var permutation of findPermutations(remainingChars)){
    //         permutationsArray.push(char + permutation) }
    //     }
    //     return permutationsArray
    // }

    // console.log(findPermutations("abc"))    

// -------------------------------------------------------------------------------------------------------

// 16) How do you reverse words in a given sentence without using any in-built method?

    // var str="today is a beautiful day" 
    // var arr1=[] 
    // var arr=str.split(" ") 

    // for(var i=arr.length-1; i>=0; i--){
    //     arr1.push(arr[i])
    // }
    // console.log(arr1.join(" "))

// -------------------------------------------------------------------------------------------------------

// 17) How do you check if two strings are a rotation of each other?

// var str1 = "ABCD"
// var str2 = "DBAC"

// var Temp = str1 + str1

// if(Temp.indexOf(str2) == -1){
//     console.log(`${str1} is not a rotated form of ${str2} `)
// }else{
//     console.log(`${str1} is a rotated form of ${str2} `)
// }

// -------------------------------------------------------------------------------------------------------

// 18) How do you check if a given string is a palindrome?

// function palindrome(str){
//     var arr = str.split('').reverse().join('')
//     // console.log(arr)
//     if(str == arr)
//         console.log("palindrome")
//     else
//         console.log("Not a palindrome")
// }
// palindrome("Hello")

// -------------------------------------------------------------------------------------------------------