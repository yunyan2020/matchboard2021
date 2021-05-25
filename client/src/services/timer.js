export default class Timer {

  #startTime
  #pausedTime
  #endTime
  #ticking = false
  timeEvents = []

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
    this.tick(callback)
  }
  pause() {
    this.ticking = false
    //array med objekt som innehåller pausad tid och startad tid 
    this.timeEvents.push({ pausedTime, startTime })
    console.table(timeEvents)
  }
  unpause(callback) {
    this.ticking = true
    this.startTime = this.now + this.startTime
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
      console.log(callback)
      callback()
      prevTick = sec
    }
    requestAnimationFrame(() => { this.tick(callback) }); // recalls tick on every frame 
  }

}