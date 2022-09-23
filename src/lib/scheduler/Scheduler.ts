export abstract class Scheduler {
  constructor() {
    const cpu = process.cpuUsage();
    console.log(`CPU usage:${cpu}`);
  }
}
