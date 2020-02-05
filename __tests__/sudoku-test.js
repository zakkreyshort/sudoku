import { Line } from '../src/sudoku.js';

describe('Line', () => {
 
  
  test ('should add value of all numbers within an array', () => {
    var lineSum = new Line(1,2,3,4,5,6,7,8,9);
   
    expect(lineSum.addValue()).toEqual(45);
    
  });
});