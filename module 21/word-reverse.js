
function reverseWords(str){
    const words = str.split(' ');
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    // console.log(words)
    const result = [];
    for(let i = words.length - 1; i >= 0; i--){
        const element = words[i]
        result.push(element)
    }

    const reversed = result.join(' ')
    return reversed;;
}
const myString = 'I am a good boy';
const showReverseWord = reverseWords(myString)
console.log(showReverseWord)