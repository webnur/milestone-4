const lyrics = 'tumi bondhu kala pakhi, ami jeno ki. bosonto kale tumai bolte parini. kala kala pakhi';

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString)
const searchStringLower = searchString.toLowerCase()

// const doesExist = lyricsLowerCase.includes(searchStringLower)
// console.log(doesExist)

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase())
// console.log(doesExistOneLine)

//---------------------------------------
// indexOf
console.log(lyrics.indexOf('kala'))

if(lyrics.indexOf('sada') !== -1){
    console.log('exits inside the string');
}
else{
    console.log('cannot find it')
}

// starts with
console.log(lyrics.startsWith('tumi'))

// end with 

const fineName = 'mybiodata.pdf';
const otherName = 'mypic.png'
fineName.endsWith('.pdf')