export class SchedulerTime {
  private dateTime: Date;

  constructor() {
    this.dateTime = new Date();
  }

  year(val: number) {
    this.dateTime.setFullYear(val);
    return this;
  }

  month(val: number) {
    this.dateTime.setMonth(val - 1);
    return this;
  }

  day(val: number) {
    this.dateTime.setDate(val);
    return this;
  }
  minute(val: number) {
    this.dateTime.setMinutes(val);
    return this;
  }

  second(val: number) {
    this.dateTime.setSeconds(val);
    return this;
  }

  time() {
    return this.dateTime;
  }
}
