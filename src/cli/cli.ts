import { program } from 'commander';

program.option('-v --version', 'print sj2 version');

program.command('logs').action(() => {
  console.log('show all logs...');
});
