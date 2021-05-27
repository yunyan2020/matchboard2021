export default class Timer {

  #startTime
  #pausedTime
  #endTime
  #ticking = false
  timeEvents = []
  stopSeq = 0
  matchTime = this.now // hmm... vad gör denna? som tar tiden vid instansiering
  started = false // on match event: timer first start
  ended = false // on end match event

  get running(){
    return this.ticking
  }

  get now() {
    return new Date().getTime()
  }

  get time() {
   return Math.floor(((this.endTime || this.now) - this.startTime ) / 1000) 
  }

  start(callback) {
    this.reset()
    this.startTime = this.now
    this.ticking = true   
    this.started = true
    this.tick(callback)
  }
  stop() {
    this.ticking = false
    //array med objekt som innehåller pausad tid och startad tid 
    // this.pausedTime = this.now
    this.timeEvents = []
    this.timeEvents.push({ pausedTime: this.now, startTime: this.startTime })  
  }
  nonStop(callback) {    
    this.ticking = true
    //this.startTime = this.now + this.startTime
    let time = 0;
    this.timeEvents.forEach(event => {
      time += (event.startTime - event.pausedTime)
    })
    this.startTime = this.now + time
    this.tick(callback)
  }

  end() {
    this.endTime = this.now
    this.ticking = false
    this.ended = true
  }

  reset() {
    this.endTime = null
  }

  startTicking(callback){
    this.ticking = true
    this.tick(callback)
  }
  stopTicking(){
    this.ticking = false
  }

  tick(callback) {
    if (!this.ticking) {
      return
    }
    let sec = new Date().getSeconds() // ticking at whole seconds
    let prevTick
    
    if (sec !== prevTick) { // we only animate on every whole second
     // console.log(callback) 
      callback()
      prevTick = sec
    }
    requestAnimationFrame(() => { this.tick(callback) }); // recalls tick on every frame 
  }

}