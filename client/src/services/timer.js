export default class Timer {

  #startTime
  #pausedTime
  #endTime
  #ticking = false
  timeEvents = []
  stopSeq = 0
  matchTime = this.now

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
    this.timeEvents = []    
    this.tick(callback)
  }
  stop() {
    this.ticking = false
    this.stopSeq++ 
    //array med objekt som innehåller pausad tid och startad tid 
    this.timeEvents.push({stopSeq:this.stopSeq, startStopTime:this.now})
    console.log(this.timeEvents)
  }
  nonStop(callback) {    
    let idx = this.timeEvents.length -1
    if (idx >= 0){
      let stopSeq = this.timeEvents[idx].stopSeq
      let startStopTime = this.timeEvents[idx].startStopTime
      let endStopTime = this.now
      let stopTime = endStopTime-startStopTime      
      this.timeEvents[idx] = ({stopSeq:stopSeq, startStopTime:startStopTime,endStopTime:endStopTime,stopTime:stopTime})
    } 
    console.log('this.timeEvents',this.timeEvents)
    console.log('befor for loop match time',Math.floor(((this.endTime ) - this.startTime ) / 1000) )
    if (this.timeEvents.length > 0) {
      this.endTime = this.now     
      console.log('befor for loop this.endTime',this.endTime )
      for(let i = 0; i < this.timeEvents.length; i++) {
        this.endTime = this.endTime  -  this.timeEvents[i].stopTime
        console.log('this.timeEvents[i].stopTime',this.timeEvents[i].stopTime)
      }
    } 
    console.log('this.endTime',this.endTime )
    console.log('startTime',this.startTime )
    let matchTime = Math.floor(((this.endTime ) - this.startTime ) / 1000)
    console.log('match time',matchTime)
    console.log('minutes:second',Math.floor(matchTime/60),matchTime%60)
   // this.startTime = this.now + this.startTime
    this.ticking = true
    this.tick(callback)
  }

  end() {
    this.endTime = this.now
    this.ticking = false
  }

  reset() {
    this.endTime = null
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