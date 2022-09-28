export interface SchedulerTask {
  exec(): void | Promise<void>;
}
