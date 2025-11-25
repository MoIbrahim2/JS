class Clock {
  #intervalId;

  constructor(time) {
    const arr = time.split(":");
    this.hours = arr[0] * 1;
    this.minutes = arr[1] * 1;
    this.seconds = arr[2] * 1;
  }
  static formatTime(hours, minutes, seconds) {
    const pad = (num) => num.toString().padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  #tick() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
        if (this.hours === 24) {
          this.hours = 0;
        }
      }
    }
  }
  start() {
    this.#intervalId = setInterval(() => {
      this.#tick();
    }, 1000);
  }
  stop() {
    clearInterval(this.#intervalId);
  }
  getTime() {
    return Clock.formatTime(this.hours, this.minutes, this.seconds);
  }
}
class AlarmClock extends Clock {
  #alarmTime;
  #intervalId;
  constructor(currentTime, alarmTime) {
    super(currentTime);
    this.#alarmTime = alarmTime;
  }
  #checkTime() {
    if (this.getTime() === this.#alarmTime) {
      console.log("Alarm! Wake up!");
      clearInterval(this.#intervalId);
      stop();
    }
  }
  start() {
    super.start();
    this.#intervalId = setInterval(() => {
      this.#checkTime();
      console.log(this.getTime());
    }, 1000);
  }
  setAlarm(newAlarmTime) {
    this.#alarmTime = newAlarmTime;
  }
}

const alarm1 = new AlarmClock("14:59:55", "15:00:00");
alarm1.start();
