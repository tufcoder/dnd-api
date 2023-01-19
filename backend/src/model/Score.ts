/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */

import { getRandomNumber, sortNumberDESC } from "../utils/functions";

export class Score {
  constructor(private minimal: number, private rule: string) {}

  getScores(total: number): number[] {
    const scores = new Array<number>(total);

    for (let i = 0; i < total; i++) {
      scores[i] = this.getRule();
    }

    return scores;
  }

  getRule(): number {
    return this.setMinimalScore(this.rule);
  }

  setMinimalScore(rule: string): number {
    let score = 0;

    while (score < this.minimal) {
      switch (rule) {
        case "1d10plus8":
          score = this.ruleRoll1D10Plus8();
          break;
        case "1d8plus10":
          score = this.ruleRoll1D8Plus10();
          break;
        case "3d6":
          score = this.ruleRoll3D6();
          break;
        default:
          score = this.ruleRoll4D6();
          break;
      }
    }

    return score;
  }

  ruleRoll4D6(): number {
    const scores = sortNumberDESC(this.rollDice(4, 6));
    scores.pop();

    return scores.reduce((accumulator, value) => (accumulator += value), 0);
  }

  ruleRoll1D8Plus10(): number {
    const scores = this.rollDice(1, 8);

    return scores[0] + 10;
  }

  ruleRoll1D10Plus8(): number {
    const scores = this.rollDice(1, 10);

    return scores[0] + 8;
  }

  ruleRoll3D6(): number {
    const total = 9;
    let scores = new Array<number>(3);
    let numbers = new Array<number>(total);

    for (let i = 0; i < total; i++) {
      scores = this.rollDice(3, 6);

      numbers[i] = scores.reduce(
        (accumulator, value) => (accumulator += value),
        0
      );

      scores = new Array<number>(3);
    }

    numbers = sortNumberDESC(numbers);

    return numbers[0];
  }

  rollDice(total: number, dice: number): number[] {
    const numbers = new Array<number>(total);

    for (let i = 0; i < total; i++) {
      numbers[i] = getRandomNumber(1, dice);
    }

    return numbers;
  }
}
