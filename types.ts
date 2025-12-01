export enum GameState {
  IDLE = 'IDLE',           // Main menu
  WAITING = 'WAITING',     // User clicked start, waiting for green
  READY = 'READY',         // Green! Click now!
  TOO_EARLY = 'TOO_EARLY', // User clicked on red
  RESULT = 'RESULT',       // Showing time for specific round
  FINISHED = 'FINISHED'    // All rounds done, showing summary
}

export interface ReactionStats {
  average: number;
  fastest: number;
  slowest: number;
  history: number[];
}

export interface AiFeedback {
  rank: string;
  comment: string;
  tips: string;
}
