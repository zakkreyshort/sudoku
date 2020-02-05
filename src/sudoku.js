

export function Line (num1, num2, num3, num4, num5, num6, num7, num8, num9) {
 this.num1 = num1
 this.num2 = num2
 this.num3 = num3
 this.num4 = num4
 this.num5 = num5
 this.num6 = num6
 this.num7 = num7
 this.num8 = num8
 this.num9 = num9
};

// test for value in line array
Line.prototype.addValue = function() {
  var total = 0;
  console.log(this);
  var numberArray = Object.values(this);
  console.log(numberArray);
  numberArray.forEach(function(addline) {
    
    total += addline;
  });
  return total;
}

// find total value of a row



// find total value of a column