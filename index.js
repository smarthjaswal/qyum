// // console.log("hello world");

// const nestedObject = {
//     name: "John",
//     age: 30,
//     id: 1,
//     nestedObject1: {
//       name: "Jane",
//       age: 25,
//       id: 2,
//       nestedObject2: {
//         name: "David",
//         age: 40,
//         id: 3,
//         nestedObject3: {
//           name: "Emily",
//           age: 35,
//           id: 4,
//           nestedObject4: {
//             name: "Michael",
//             age: 50,
//             id: 5,
//             nestedObject5: {
//               name: "Sarah",
//               age: 45,
//               id: 6
//             }
//           }
//         }
//       }
//     }
//   };
  
// console.log(nestedObject.nestedObject1.name);

// // // const arr = [1,[2,3,[4,[8]]],5,6];

// // // const ans = arr.flat(Infinity);
// // // console.log(ans);

// // const arr=[2,7,11,4,-2]
// // // o/p =[20,15,11,18,24]

// // const brr = [];

// // var sum = 0;
// // for(var i=0;i<arr.length;i++){
// //     sum+= arr[i];
    
// // }
// // for(var i=0;i<arr.length;i++){
// //     brr[i] = sum-arr[i];
// // }
// // console.log(brr);

// // Debouncing

// // let counter = 0;
// // const trig=()=>{
// //     console.log("fetching data...",counter++);
// // }
  
// // const debounce = function(fn, d){
// //     let timer;
// //     return function(){
// //         let context = this,
// //         args = arguments;
// //         clearTimeout(timer);
// //         timer = setTimeout(()=>{
// //             trig.apply(context, arguments);
// //         }, d)

// //     }
// // }
 
// const betterfunc = debounce(trig, 300);
// // nums =[4,3,2,7,8,2,3,7,1]
// // output :=2 ,3

// // const nums = [4,3,2,7,8,2,3,7,1,7,7];
// // const brr = [nums.length];
// // var j=0
// // var count =0;
// // for(var i=0;i<nums.length;i++){
// //     brr[nums[i]] =+ 1;  
// // }
// //  console.log(brr);





// function getVal() {
//     const input = document.getElementById("input").value;
//     console.log(input);
//     const rev = input.split(' ').reverse().join(' ');
//     const data = isVowel(rev);
//     document.getElementById("para").innerHTML = data;
//     document.getElementsByClassName("vowel")[0].style.color = "red";
//   }
  
//   function isVowel(rev) {
//     let str = "";
//     for (var i = 0; i < rev.length; i++) {
//       if ('aeiou'.includes(rev[i])) {
//         // The character is a vowel
//       } else {
//         str += rev[i];
//       }
//     }
//     return str;
//   }
  
  


// // const sentenceInput = document.getElementById('sentenceInput');
// // const reversedSentence = document.getElementById('reversedSentence');

// // sentenceInput.addEventListener('input', () => {
// //   const sentence = sentenceInput.value;
// //   const reversedWords = sentence.split(' ').reverse().join(' ');
// //   reversedSentence.textContent = reversedWords;

// //   const vowels = ['a', 'e', 'i', 'o', 'u'];
// //   reversedSentence.innerHTML = reversedWords.replace(/[aeiou]/gi, vowel => `<span class="vowel">${vowel}</span>`);
// // });
// //  const normal_div =  document.querySelector('.n_count');
// //  const throttle_div =  document.querySelector('.t_count');
// //  let n_count = 0;


// //  const normalCount=()=>{
// //    n_count++;
// //    normal_div.innerHTML = `Normal Count: ${n_count}`;
// //    console.log("hello");
// // }



// // const showcount=()=>{
// //     normalCount();
// // }


// // const inputField = document.getElementById('inputField');
// // const submitButton = document.getElementById('submitButton');
// // const output = document.getElementById('output');

// // const reverseWords = (sentence) => {
// //   const words = sentence.split(' ');
// //   const reversedWords = words.reverse();
// //   return reversedWords.join(' ');
// // };

// // const checkVowels = (sentence) => {
// //   const vowels = /[aeiou]/gi;
// //   return vowels.test(sentence);
// // };

// // const updateOutput = () => {
// //   const sentence = inputField.value;
// //   const reversedSentence = reverseWords(sentence);
// //   const hasVowels = checkVowels(sentence);

// //   output.textContent = reversedSentence;

// //   if (hasVowels) {
// //     output.style.color = 'red';
// //   } else {
// //     output.style.color = 'black';
// //   }
// // };

// // submitButton.addEventListener('click', updateOutput);

function reverseAndHighlightSentence() {
    var input = document.getElementById("sentence").value;
    var words = input.split(" ");
    var reversedWords = words.reverse();
    var reversedSentence = reversedWords.join(" ");

    var vowels = ["a", "e", "i", "o", "u"];

    var highlightedSentence = "";

    for (var i = 0; i < reversedSentence.length; i++) {
      var char = reversedSentence[i];

      if (vowels.includes(char.toLowerCase())) {
        highlightedSentence += '<span class="highlight">' + char + '</span>';
      } else {
        highlightedSentence += char;
      }
    }

    document.getElementById("reversed-sentence").innerHTML = highlightedSentence;
  }



















