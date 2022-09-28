import { SchedulerTask } from './SchedulerTask';
import { SchedulerTime } from './ScheduleTime/SchedulerTime';
import { EventEmitter } from 'events';
export class Scheduler extends EventEmitter {
  private task: SchedulerTask;
  private scheduled: boolean;
  private timeMatch: SchedulerTime;
  private timeOut: NodeJS.Timeout;

  constructor(task: SchedulerTask) {
    super();
    this.task = task;
    this.timeMatch = new SchedulerTime();
  }

  // once() {
  //   this.scheduled = false;
  // }

  public every() {
    this.scheduled = true;
    return this.timeMatch;
  }

  public start() {
    console.log(new Date());
    console.log(this.timeMatch.time());

    let lastCheck = process.hrtime();
    const lastExecution = new Date();

    // let lastExecution = this.timeMatcher.apply(new Date());

    const matchTime = () => {
      const delay = 1000;
      const elapsedTime = process.hrtime(lastCheck);
      const elapsedMs = (elapsedTime[0] * 1e9 + elapsedTime[1]) / 1e6;
      const missedExecutions = Math.floor(elapsedMs / 1000);

      for (let i = missedExecutions; i >= 0; i--) {
        const date = new Date(new Date().getTime() - i * 1000);
        console.log(`last Execution: ${lastExecution.getTime()}`);
        console.log(`Temp date: ${date.getTime()}`);
        console.log(`itarable: ${i}`);
        console.log(`lastExecution less dateTemp: ${lastExecution.getTime() < date.getTime()}`);
        console.log('------------------------');
        // const dateTmp = this.timeMatcher.apply(date);
        // if (
        //   lastExecution.getTime() < dateTmp.getTime() &&
        //   (i === 0 || this.autorecover) &&
        //   this.timeMatcher.match(date)
        // ) {
        //   this.emit('scheduled-time-matched', dateTmp);
        //   dateTmp.setMilliseconds(0);
        //   lastExecution = dateTmp;
        // }
      }
      lastCheck = process.hrtime();
      this.timeOut = setTimeout(matchTime, delay);
    };
    // matchTime();
  }
}

// const timer = new Scheduler({} as any)
// timer.every().second(2)
// timer.start();

// 86400 24 * 60 * 60 * 1000;
// new Cron(new Job()).every().second(30)

// new Scheduler(new CronJob()).once().trimeZone().date().execute()
// new Scheduler().every().second(2);
