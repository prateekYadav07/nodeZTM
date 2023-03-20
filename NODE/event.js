const EventEmitter = require('events')
const celebrity = new EventEmitter();

//so basically Observer Pattern means that one event can be listened by multiple observers
//or multiple callback functions can react to same event

celebrity.on('race', (result) => {
    if(result && result=== 'win')
    console.log('Congrats, You won');
})

celebrity.on('race', (result) => {
    if(result && result=== 'lost')
    console.log('Loser, You lost');
})

process.on('exit', (code) => {
    console.log('process exit event with code:',code);
})

celebrity.emit('race', 'win')
celebrity.emit('race', 'lost')