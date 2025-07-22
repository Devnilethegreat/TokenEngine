// index.ts
import * as dotenv from 'dotenv';
dotenv.config();

interface ProcessData {
  value: number;
  velocity: number;
  count: number;
}

interface ProcessResult {
  score: number;
  flagged: boolean;
  threshold: number;
}

export class TokenEngineCore {
  private threshold: number;

  constructor(threshold: number = 0.75) {
    this.threshold = threshold;
  }

  score(value: number, velocity: number, count: number): number {
    const vSig = Math.min(value / 1_000_000, 1.0);
    const velSig = Math.min(velocity / 500, 1.0);
