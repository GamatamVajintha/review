const EventEmitter = require('events')

const emitter = new EventEmitter()

const person1=(mssg)=>{
    console.log("Message from first person :" + mssg)
}
const person2=(mssg)=>{
    console.log("Message from second person :" + mssg)
}

emitter.addListener('printEvent',person1)
emitter.addListener('printEvent',person2)

emitter.emit('printEvent','Event Occured')

emitter.removeAllListeners('printEvent')

emitter.emit('printEvent')