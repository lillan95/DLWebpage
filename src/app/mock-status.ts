export class status {
    progress: string;
    color: string;
  }

export const STATUS: status[] = [
  { progress: 'Not started', color: 'red'},
  { progress: 'Started', color: 'yellow'},
  { progress: 'Done', color: 'blue'}
];