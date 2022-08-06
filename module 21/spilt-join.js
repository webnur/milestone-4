const lyrics = 'tumi bondhu kala pakhi, ami jeno ki. bosonto kale tumai bolte parini. kala kala pakhi';

const parts = lyrics.split(' ');
// console.log(parts)
const sentence = lyrics.split('.')
const chars = lyrics.split('')
// console.log(chars)

const partial = lyrics.slice(5, 8);
// console.log(partial)

const lines = [
    'tumi bondhu kala pakhi, ami jeno ki',
    'bosonto kale tumai bolte parini',
    'kala kala pakhi'
  ]

// const newsong = lines.join(':')
const newsong = lines.join('. ')
console.log(newsong)