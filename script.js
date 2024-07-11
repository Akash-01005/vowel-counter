let result = document.getElementById('result');
let countBtn = document.getElementById('countBtn');

let checkVowel = () =>{
    let inputText = document.getElementById('inputText').value;
    let count = 0;
    text = inputText.toLowerCase();
    for(let i=0;i<inputText.length;i++){
         let char = text.charAt(i)
         if(isVowel(char)){
            count ++;
         }
    }
    result.textContent = "Total Vowels: "+ count;
}

let isVowel = (char) =>{
    const vowel = ['a','e','i','o','u'];
    return vowel.includes(char);
}
countBtn.addEventListener('click',checkVowel);